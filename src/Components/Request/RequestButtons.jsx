import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Dialog, useDispatch } from '@hrbolek/uoisfrontend-shared/src'

import { RequestsAsyncActions } from "../../Queries/_requests"

const HistoryMessageDialog = ({buttonLabel, onOk}) => {
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState("")
    const show = () => setVisible(true)
    const hideCancel = () => {
        setVisible(false)
    }
    const hideOk = () => {
        setVisible(false)
        onOk(message)
    }
    const onChange = (e) => {
        const msg = e.target.value
        setMessage(msg)
    }
    if (visible) {
        return (
            <>
            <Dialog onCancel={hideCancel} onOk={hideOk} title={buttonLabel}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Zpráva / poznámka"
                    className="mb-3"
                >
                    <Form.Control className='form-control' type="text" placeholder="name@example.com" onChange={onChange}/>
                </FloatingLabel>
                
            </Dialog>
            <Button onClick={show} variant='outline-success'>{buttonLabel}</Button>
            </>
        )
    } else {
        return (
            <Button onClick={show} variant='outline-success'>{buttonLabel}</Button>
        )
    }
    
}

export const RequestButtons = ({request}) => {
    const dispatch = useDispatch()
    const targets = request?.state?.targets || []
    const onOk = (transitionid) => (message) => {
        console.log(`START of ${transitionid} choosen (${message})`)
        dispatch(RequestsAsyncActions.usetransition({id: request.id, history_message: message, trasition_id: transitionid, lastchange: request.lastchange}))
        .then((json)=> {
            console.log(`${transitionid} choosen (${message}) DONE ${json}`)
        })
    }
    return (
        <>
            {/* <Button variant="success" className='form-control'>Vrátit</Button>
            <Button variant="success" className='form-control'>Schválit</Button> */}
            {/* <Button variant="success" >Vrátit</Button>
            <Button variant="success" >Schválit</Button> */}
            {targets.map(transition => 
                <HistoryMessageDialog key={transition?.id} buttonLabel={transition?.name +" (" + transition?.target?.name +")"} onOk={onOk(transition?.id)}/>
                // <Button key={transition?.id} variant='outline-success'>
                //     {transition?.name} ({transition?.target?.name})
                // </Button>
            )}
        </>
    )
}