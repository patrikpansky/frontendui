// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { PublicationLargeCard } from "../../Components/Publication/PublicationLargeCard"
import { PublicationsAsyncActions } from "../../Queries/_publications"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst publikaci", success: "Načtení publikace se povedlo"})
export const PublicationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [publication, promise] = useFreshItem({id}, PublicationsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (publication) {
        return (
            <PublicationLargeCard publication={publication} />
        )
    } else {
        return (
            <div>Nahrávám publikaci...</div>
        )
    }
    
}