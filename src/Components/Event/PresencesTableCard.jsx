// field presences
// targeting to Presence
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { PresencesTable } from "../Presence/PresencesTable";
export const EventPresencesTableCard = ({ event , ...props}) => {
    return (
        <EventCardCapsule event={ event } >
            <PresencesTable presences={ event?.presences } {...props}>
            </PresencesTable>
        </EventCardCapsule>
    )
}