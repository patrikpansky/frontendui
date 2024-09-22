// field eventtype
// targeting to EventType
// going from Event
import { EventtypeMediumCard } from "../Eventtype/EventtypeMediumCard";

export const EventEventtypeMediumCard = ({ event , ...props}) => {
    return (
        <EventtypeMediumCard eventtype={ event?.eventtype } {...props} />
    )
}