// field event
// targeting to Event
// going from Presence
import { EventMediumCard } from "../Event/EventMediumCard";

export const PresenceEventMediumCard = ({ presence , ...props}) => {
    return (
        <EventMediumCard event={ presence?.event } {...props} />
    )
}