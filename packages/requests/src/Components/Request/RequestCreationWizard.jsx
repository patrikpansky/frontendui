import { useState } from 'react'
import { useNavigate } from 'react-router'

import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { ErrorHandler, FormBody, Input, LoadingSpinner, Options, Select, SimpleCardCapsule } from '@hrbolek/uoisfrontend-shared'
import { RequestCategoryOptions } from '../RequestCategory/RequestCategoryOptions'
import { RequestTypeOptions } from '../RequestType/RequestTypeOptions'
import { RequestInsertAsyncAction } from './Queries/RequestInsertAsyncAction'

export const RequestCreationWizard = ({request}) => {
    const [wizardStep, setWizardStep] = useState(0)
    const [_request, setRequest] = useState({category_id: "47c9d6a8-e2fa-478d-a876-593463e95370", ...request})
    const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
    const navigate = useNavigate()

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

    const handleCreate = async() => {
        if (!__typename) {
            const newRequest = await fetch(_request)
            setRequest(prev => newRequest)
            // onDone(newRequest)
            navigate(`/requests/request/view/${newRequest.id}#graph`)
        }
        // onDone(_request)
        navigate(`/requests/request/view/${_request.id}#graph`)
    }

    return (<RequestCreationWizardLast request={_request} onBack={handleStepBack} onDone={handleCreate}>
        "{JSON.stringify(rest)}"
        {/* RequestCreationWizard {JSON.stringify(request)} */}
    </RequestCreationWizardLast>)
}

export const RequestCreationWizard0 = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
    const [{shouldFetch, request: _request}, setRequest] = useState({
        request, 
        shouldFetch: 0, 
    })
    const __typename = _request?.__typename || request?.__typename

    const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
    const navigate = useNavigate()
    
    const handleCreate = async() => {
        if (!__typename) {
            const newRequest = await fetch(_request)
            setRequest(prev => newRequest)
            // onDone(newRequest)
            navigate(`/requests/request/view/${newRequest.id}#graph`)
        }
        // onDone(_request)
        navigate(`/requests/request/view/${_request.id}#graph`)
    }
    
    const handleChange = (e) => {
        // console.log("RequestCreationWizard0.handleChange", e)
        const htmlElement = e.target;
        const name = htmlElement.id
        const value = htmlElement.value
        // console.log("RequestCreationWizard0.handleChange", _request.category_id, value.category_id)
        const shouldFetch = _request.category_id !== value.category_id
        if (shouldFetch) {
            setRequest(prev => ({...prev, shouldFetch: prev.shouldFetch + 1, request: {...value}}))
        } else {
            setRequest(prev => ({...prev, request: {...value}}))
        }
    }
    // console.log("RequestCreationWizard0.render", _request, shouldFetch)
    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        <>
            {!__typename && (
                <FormBody id="request" defaultValue={_request} label='Vytvoření požadavku [krok 1]' onChange={handleChange} onBlur={handleChange}>
                    <p>Vyberte kategorii a typ</p>
                    <Select id="category_id" label="Kategorie požadavků" className="form-control">
                        <RequestCategoryOptions />
                    </Select>
                    <Select id="request_type_id" label="Typ požadavku" className="form-control">
                        <RequestTypeOptions params={{where: {category_id: {_eq: _request.category_id}}}} shouldFetch={shouldFetch}/>
                    </Select>    

                    {_request.request_type_id && (
                        <span className='btn btn-lg btn-outline-success' onClick={() => onDone(_request)}>
                            Další krok
                        </span>
                    )}
                </FormBody>
            )}
            {__typename && (
                <FormBody label='Vytvoření požadavku [krok 1]' >
                    <p>Požadavek již existuje, nelze měnit typ.</p>
                    <span className='btn btn-lg btn-outline-success' onClick={() => onDone(_request)}>
                        Další krok
                    </span>
                </FormBody>
            )}
            {/* <br />{JSON.stringify(_request)} */}
        </>
    </>)
}


export const RequestCreationWizard1 = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
    const [{shouldFetch, request: _request}, setRequest] = useState({
        request, 
        shouldFetch: 0, 
    })
    const __typename = _request?.__typename || request?.__typename

    const handleChange = (e) => {
        // console.log("RequestCreationWizard0.handleChange", e)
        const htmlElement = e.target;
        const name = htmlElement.id
        const value = htmlElement.value
        // console.log("RequestCreationWizard0.handleChange", _request.category_id, value.category_id)
        const shouldFetch = _request.category_id !== value.category_id
        if (shouldFetch) {
            setRequest(prev => ({...prev, shouldFetch: prev.shouldFetch + 1, request: {...value}}))
        } else {
            setRequest(prev => ({...prev, request: {...value}}))
        }
    }
    // console.log("RequestCreationWizard0.render", _request, shouldFetch)
    return (<>
        <>
            {!__typename && (
                <FormBody id="request" defaultValue={_request} label='Vytvoření požadavku [krok 2]' onChange={handleChange} onBlur={handleChange}>
                    <p>Pojmenujte požadavek</p>
                      
                    <Input id="name" label="Název" className="form-control" 
                        defaultValue={request.name || "Název"}
                    />
                    <Input id="name_en" label="Anglický název" className="form-control" 
                        defaultValue={request.name_en || request.nameEn || "Název"}
                    />

                    {_request.request_type_id && (<>
                        <span className='btn btn-lg btn-outline-success' onClick={() => onBack(_request)}>
                            Předcházející krok
                        </span>
                        <span className='btn btn-lg btn-outline-success' onClick={() => onDone(_request)}>
                            Další krok
                        </span>
                    </>)}
                </FormBody>
            )}
            {__typename && (
                <FormBody label='Vytvoření požadavku [krok 2]' >
                    <p>Požadavek již existuje, nelze měnit typ.</p>
                    <span className='btn btn-lg btn-outline-success' onClick={onBack}>
                        Předcházející krok
                    </span>
                    <span className='btn btn-lg btn-outline-success' onClick={onDone}>
                        Další krok
                    </span>
                </FormBody>
            )}
            {/* <br />{JSON.stringify(_request)} */}
        </>
    </>)
}


export const RequestCreationWizardLast = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
    const [{shouldFetch, request: _request}, setRequest] = useState({
        request, 
        shouldFetch: 0, 
    })
    const __typename = _request?.__typename || request?.__typename

    const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
    const navigate = useNavigate()
    
    const handleCreate = async() => {
        if (!__typename) {
            const newRequest = await fetch(_request)
            setRequest(prev => newRequest)
            // onDone(newRequest)
            navigate(`/requests/request/view/${newRequest.id}#graph`)
        }
        // onDone(_request)
        navigate(`/requests/request/view/${_request.id}#graph`)
    }
    
    const handleChange = (e) => {
        // console.log("RequestCreationWizard0.handleChange", e)
        const htmlElement = e.target;
        const name = htmlElement.id
        const value = htmlElement.value
        // console.log("RequestCreationWizard0.handleChange", _request.category_id, value.category_id)
        const shouldFetch = _request.category_id !== value.category_id
        if (shouldFetch) {
            setRequest(prev => ({...prev, shouldFetch: prev.shouldFetch + 1, request: {...value}}))
        } else {
            setRequest(prev => ({...prev, request: {...value}}))
        }
    }
    // console.log("RequestCreationWizard0.render", _request, shouldFetch)
    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        <>
            {!__typename && (
                <FormBody id="request" defaultValue={_request} label='Vytvoření požadavku [krok 3]' onChange={handleChange} onBlur={handleChange}>
                    <p>Rekapitulace</p>
                    <Select disabled id="request_type_id" label="Typ požadavku" className="form-control">
                        <RequestTypeOptions params={{where: {category_id: {_eq: _request.category_id}}}} shouldFetch={shouldFetch}/>
                    </Select>    
                    <Input disabled id="name" label="Název" className="form-control" 
                        defaultValue={request.name || "Název"}
                    />
                    <Input disabled id="name_en" label="Anglický název" className="form-control" 
                        defaultValue={request.name_en || request.nameEn || "Název"}
                    />

                    {_request.request_type_id && (<>
                        <span className='btn btn-lg btn-outline-success' onClick={onBack}>
                            Předcházející krok
                        </span>
                        <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
                            Vytvořit
                        </span>
                    </>)}
                </FormBody>
            )}
            {__typename && (
                <FormBody label='Vytvoření požadavku [krok 3]' >
                    <span className='btn btn-lg btn-outline-success' onClick={onBack}>
                        Předcházející krok
                    </span>
                    <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
                        Vytvořit
                    </span>
                </FormBody>
            )}
            {/* <br />{JSON.stringify(_request)} */}
        </>
    </>)
}

// export const RequestCreationWizard1_ = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
//     const [{shouldFetch, ..._request}, setRequest] = useState({
//         ...request, 
//         shouldFetch: 0, 
//     })
//     const { fetch, loading, error, entity } = useAsyncAction(Request, {}, {deferred: true})
    
//     const handleUpdate = async() => {
//         const __typename = _request?.__typename || request?.__typename
//         if (!__typename) {
//             const newRequest = await fetch(_request)
//             setRequest(prev=> newRequest)
//             onDone(newRequest)
//         }
//         onDone(_request)
//     }

//     const handleChange = (e) => {
//         const name = e.target.id
//         const value = e.target.value
//         setRequest(prev => ({...prev, [name]: value}))
//     }

//     return (
//     <SimpleCardCapsule title={"Vytvoření požadavku [krok 2]"}>
//         <p>Zadejte název</p>
        
//         <Input id="name" label="Název" className="form-control" 
//             onChange={handleChange} onBlur={handleChange} 
//             defaultValue={request.name || "Název"}
//         />
//         <Input id="name_en" label="Anglický název" className="form-control" 
//             onChange={handleChange} onBlur={handleChange} 
//             defaultValue={request.name_en || request.nameEn || "Název"}
//         />
//         <span className='btn btn-lg btn-outline-warning' onClick={() => onBack(_request)}>
//             Předcházející krok
//         </span>
        
//         <span className='btn btn-lg btn-outline-success' onClick={() => onDone(_request)}>
//             Další krok
//         </span>
//         {/* <br />{JSON.stringify(_request)}
//         <br />{JSON.stringify(request)} */}
//     </SimpleCardCapsule>)
// }

// export const RequestCreationWizardLast = ({request, onDone=(request)=> null, onBack=(request)=>null}) => {
//     const { fetch, loading, error, entity } = useAsyncAction(RequestInsertAsyncAction, {}, {deferred: true})
//     const navigate = useNavigate()
//     const handleCreate = async() => {
//         const newRequest = await fetch(request)
//         if (newRequest)
//             navigate(`/requests/request/view/${newRequest.id}`)
//     }
//     return (<>
//         {error && <ErrorHandler errors={error} />}
//         {loading && <LoadingSpinner />}
//         <SimpleCardCapsule title={"Vytvoření požadavku [krok 3]"}>
//             <p>Rekapitulace</p>
            
//             Typ požadavku {request?.type_id}< br/>
//             Název požadavku {request?.name} ({request?.name_en}) < br/>
//             {JSON.stringify(request)}< br/>
//             <span className='btn btn-lg btn-outline-warning' onClick={() => onBack(request)}>
//                 Předcházející krok
//             </span>
//             <span className='btn btn-lg btn-outline-success' onClick={handleCreate}>
//                 Vytvořit požadavek
//             </span>
//         </SimpleCardCapsule>
//     </>)
// }