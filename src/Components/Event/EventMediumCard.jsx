import { EventCardCapsule } from './EventCardCapsule';
import { EventCardBody } from './EventCardBody';

export const EventMediumCardFragment = `
fragment EventMediumCardFragment on EventGQLModel {
        id
        name
        nameen
        lastchange
        created
        duration
        description
        place
        placeid
        startdate
        enddate
    }`

export const EventMediumCardConstant = ({ event, children, label="" }) => {
    return (
        <EventCardCapsule event={ event } label={label} >
            <EventCardBody event={ event }>
                {children}
            </EventCardBody>
        </EventCardCapsule>        
    )
}
export let EventMediumCard = EventMediumCardConstant
export const setMediumCard = (newMediumCard) => EventMediumCard = newMediumCard