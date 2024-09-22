// field event
// targeting to Event
// going from Plannedlesson
import { EventMediumCard } from "../Event/EventMediumCard";

export const PlannedlessonEventMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <EventMediumCard event={ plannedlesson?.event } {...props} />
    )
}