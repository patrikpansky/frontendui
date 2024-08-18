// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { RequestLargeCard } from "../../Components/Request/RequestLargeCard"
import { RequestsAsyncActions } from "../../Queries/_requests"
import { RequestLastForm } from "../../Components/Request/RequestLastForm"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst Požadavek", success: "Načtení Požadaveke se povedlo"})
export const RequestEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [request, promise] = useFreshItem({id}, RequestsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (request) {
        return (
            <RequestLargeCard request={request}>
                <RequestLastForm request={request} mode="edit"/>
            </RequestLargeCard>
        )
    } else {
        return (
            <div>Nahrávám Požadavek...</div>
        )
    }
    
}