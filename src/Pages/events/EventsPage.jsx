// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { EventsInfinityComponent } from "../../Components/Event/EventsCalendar"

const where = {"startdate": {"_ge": "2024-03-04T08:00:00"}}

export const EventsPage = ()  => {
    const {startdate="20220101T00:00:01"} = useParams()
    return (
        <EventsInfinityComponent where={where} />
    )   
}