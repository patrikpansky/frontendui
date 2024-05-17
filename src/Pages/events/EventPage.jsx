// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { EventLargeCard } from "../../Components/Event/EventLargeCard"
import { EventAsyncActions } from "../../Queries/_events"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const EventPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, userPromise] = useFreshItem({id}, EventAsyncActions.read)
    userPromise.then(onResolve, onReject)

    if (event) {
        return (
            <EventLargeCard event={event} />
        )
    } else {
        return (
            <div>Nahrávám událost...</div>
        )
    }
    
}