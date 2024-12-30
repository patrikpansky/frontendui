import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InsertStateButton } from '../State/InsertStateButton'
import { DeleteStateTransitionButton, InsertStateTransitionButton, StateMachineReadAsyncAction } from '../StateTransition'
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { AsyncClickHandler, AsyncComponent } from '@hrbolek/uoisfrontend-shared'
import { TrashFill } from 'react-bootstrap-icons'

const Transition = ({statemachine, transition, ...props}) => {
    return (
        <DeleteStateTransitionButton className="btn btn-sm btn-outline-danger">
            <TrashFill /> {transition.name}
        </DeleteStateTransitionButton>
    )
}

const TransitionList = ({statemachine, transitions, children, ...props}) => {
    return (<>
        {transitions.map(transition => <Transition statemachine={statemachine} {...props} key={transition.id} transition={transition}/>)}
        {children}
    </>)
}

export const StateDesigner = ({state, statemachine, onChange=()=>null}) => {
    const {sources=[], targets=[]} = state
    const handleNewTransition = (transition) => {
        onChange()
    }

    return (
    <Row>
        <Col xs={5}>
            <TransitionList statemachine={statemachine} transitions={sources} className="btn btn-sm btn-outline-secondary" />
        </Col>
        <Col xs={2}><span className="btn btn-sm btn-outline-secondary">{state?.name}</span></Col>
        <Col xs={5}>
            <TransitionList statemachine={statemachine} transitions={targets} className="btn btn-sm btn-outline-secondary">
                <InsertStateTransitionButton  
                    className="btn btn-sm btn-outline-secondary" 
                    params={{
                        statemachine_id: statemachine.id,
                        source_id: state.id,
                        statemachine: statemachine
                    }}
                    onDone={handleNewTransition}
                >
                    Nový přechod
                </InsertStateTransitionButton>
            </TransitionList> 
        </Col>
    </Row>
    )
}

export const StateMachineDesigner = ({statemachine, children, onChange=()=>null}) => {
    const {states=[]} = statemachine
    return (<>
        {states.map(
            state => <StateDesigner key={state.id} state={state} statemachine={statemachine} onChange={onChange}/>
        )}
        <InsertStateButton 
            className="btn btn-sm btn-outline-secondary" 
            params={{
                statemachine_id: statemachine.id
            }}
            onDone={onChange}
        >
            Nový stav
        </InsertStateButton>
        {children}
    </>)
}

export const StateMachineLiveDesigner = ({statemachine, onChange=()=>null}) => {
    const [click, setClick] = useState(0)
    const handleChange = () => {
        setClick(prev => prev + 1)
        onChange(statemachine)
    }
    return (
        <AsyncComponent 
            asyncAction={StateMachineReadAsyncAction} 
            queryVariables={{...statemachine, click}} 
            propertyName={"statemachine"}
            onChange={handleChange}
            // hook={click}
        >
            <StateMachineDesigner />
            <span>{click}</span>
        </AsyncComponent>
    )
}