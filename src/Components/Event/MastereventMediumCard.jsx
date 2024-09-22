// field masterevent
// targeting to Event
// going from Event
import { EventMediumCard } from "../Event/EventMediumCard";

export const EventMastereventMediumCard = ({ event , ...props}) => {
    return (
        <EventMediumCard event={ event?.masterevent } {...props} />
    )
}