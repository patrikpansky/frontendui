import { AsyncComponent } from "@hrbolek/uoisfrontend-shared"
import { StateReadAsyncAction, VerticalArcGraph } from "@hrbolek/uoisfrontend-ug"

export const RequestStateMachine = ({request}) => {
    return (<>
        Stavy
        <AsyncComponent 
            asyncAction={StateReadAsyncAction} 
            queryVariables={{id: request.state.id}}
            propertyName="state"
        > 
            <State2StateMachine />
        </AsyncComponent>
    </>)
}

const State2StateMachine = ({state}) => {
    return (<>
        {JSON.stringify(state.statemachine?.states)}
        {JSON.stringify(state.statemachine?.transitions)}
        {/* {state?.statemachine&&
            <VerticalArcGraph statemachine={state.statemachine} />
        } */}
        
    </>)
}
{/* <AsyncComponent asyncAction={}>
                                <VerticalArcGraph statemachine={request?.}/>
                            </AsyncComponent> */}