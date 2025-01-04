import { useState } from 'react'
import { useNavigate } from 'react-router'

import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { ErrorHandler, Input, LoadingSpinner, Options, Select, SimpleCardCapsule } from '@hrbolek/uoisfrontend-shared'
import { RequestCategoryOptions } from '../RequestCategory/RequestCategoryOptions'
import { RequestTypeOptions } from '../RequestType/RequestTypeOptions'
import { RequestInsertAsyncAction } from './Queries/RequestInsertAsyncAction'

export const RequestCreationWizard = ({request}) => {
    const [wizardStep, setWizardStep] = useState(0)
    const [_request, setRequest] = useState({category_id: "47c9d6a8-e2fa-478d-a876-593463e95370", ...request})
    const {id, ...rest} = request
    const handleStepBack = (request) => {
        console.log("handleStepBack", request)
        setWizardStep(prev => prev - 1)
        setRequest(prev => ({...prev, ...request}))
    }
    const handleStepForward = (request) => {
        console.log("handleStepForward", request)
        setWizardStep(prev => prev + 1)
        setRequest(prev => ({...prev, ...request}))
    }
    if (wizardStep === 0) {
        const onRequestTypeSelect = (request) => {
            handleStepForward(request)
        }
        return (<RequestCreationWizard0 request={_request} onDone={onRequestTypeSelect} onBack={handleStepBack}>

        </RequestCreationWizard0>)
    }
    if (wizardStep === 1) {
        const onNameTyped = (request) => {
            handleStepForward(request)
        }
        return (<RequestCreationWizard1 request={_request} onDone={onNameTyped}  onBack={handleStepBack} />)
    }
    return (<RequestCreationWizardLast request={_request} onBack={handleStepBack}>
        "{JSON.stringify(rest)}"
        {/* RequestCreationWizard {JSON.stringify(request)} */}
    </RequestCreationWizardLast>)
}

export const RequestCreationWizard0 = ({request, onDone=(request)=> null}) => {
    const [{__typename, shouldFetch, ..._request}, setRequest] = useState({
        ...request, 
        shouldFetch: 0, 
    })
    const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
    const navigate = useNavigate()
    const handleCreate = async() => {
        const __typename = _request?.__typename || request?.__typename
        if (!__typename) {
            const newRequest = await fetch(_request)
            setRequest(prev => newRequest)
            // onDone(newRequest)
            navigate(`/requests/request/view/${newRequest.id}#graph`)
        }
        // onDone(_request)
        navigate(`/requests/request/view/${_request.id}#graph`)
    }
    //a12257b9-72fe-46da-8190-dab811aee687
    const handleChange = (e) => {
        const htmlElement = e.target;
        const name = htmlElement.id
        const value = htmlElement.value
        // const selectedText = htmlElement?.options[htmlElement?.selectedIndex]?.text;
        setRequest(prev => ({...prev, [name]: value}))
        if (name === "category_id")
            setRequest(prev => ({...prev, shouldFetch: prev.shouldFetch + 1}))
        // else
        //     setRequest(prev => ({...prev, type_name: selectedText}))
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        <SimpleCardCapsule title={"Vytvoření požadavku [krok 1]"}>
            {!__typename && <>
                <p>Vyberte kategorii a typ</p>
                <Select id="category_id" label="Kategorie požadavků" className="form-control" onChange={handleChange} onBlur={handleChange}>
                    <RequestCategoryOptions />
                </Select>
                <Select id="request_type_id" label="Typ požadavku" className="form-control" onChange={handleChange} onBlur={handleChange} >
                    <RequestTypeOptions params={{where: {category_id: {_eq: _request.category_id}}}} shouldFetch={shouldFetch}/>
                </Select>    
                {_request.request_type_id && <>
                    <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
                        Další krok
                    </span>
                </>}
            </>}
            {__typename && <>
                <p>Požadavek již existuje, nelze měnit typ.</p>
                <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
                    Další krok
                </span>
            </>}           
            {/* <br />{JSON.stringify(_request)} */}
        </SimpleCardCapsule>
    </>)
}

export const RequestCreationWizard1 = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
    const [{shouldFetch, ..._request}, setRequest] = useState({
        ...request, 
        shouldFetch: 0, 
    })
    const { fetch, loading, error, entity } = useAsyncAction(Request, {}, {deferred: true})
    
    const handleUpdate = async() => {
        const __typename = _request?.__typename || request?.__typename
        if (!__typename) {
            const newRequest = await fetch(_request)
            setRequest(prev=> newRequest)
            onDone(newRequest)
        }
        onDone(_request)
    }

    const handleChange = (e) => {
        const name = e.target.id
        const value = e.target.value
        setRequest(prev => ({...prev, [name]: value}))
    }

    return (
    <SimpleCardCapsule title={"Vytvoření požadavku [krok 2]"}>
        <p>Zadejte název</p>
        
        <Input id="name" label="Název" className="form-control" 
            onChange={handleChange} onBlur={handleChange} 
            defaultValue={request.name || "Název"}
        />
        <Input id="name_en" label="Anglický název" className="form-control" 
            onChange={handleChange} onBlur={handleChange} 
            defaultValue={request.name_en || request.nameEn || "Název"}
        />
        <span className='btn btn-lg btn-outline-warning' onClick={() => onBack(_request)}>
            Předcházející krok
        </span>
        
        <span className='btn btn-lg btn-outline-success' onClick={() => onDone(_request)}>
            Další krok
        </span>
        {/* <br />{JSON.stringify(_request)}
        <br />{JSON.stringify(request)} */}
    </SimpleCardCapsule>)
}

export const RequestCreationWizardLast = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
    const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
    const navigate = useNavigate()
    const handleCreate = async() => {
        const newRequest = await fetch(request)
        if (newRequest)
            navigate(`/requests/request/view/${newRequest.id}`)
    }
    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner />}
        <SimpleCardCapsule title={"Vytvoření požadavku [krok 3]"}>
            <p>Rekapitulace</p>
            
            Typ požadavku {request?.type_id}< br/>
            Název požadavku {request?.name} ({request?.name_en}) < br/>
            {JSON.stringify(request)}< br/>
            <span className='btn btn-lg btn-outline-warning' onClick={() => onBack(request)}>
                Předcházející krok
            </span>
            <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
                Vytvořit požadavek
            </span>
        </SimpleCardCapsule>
    </>)
}