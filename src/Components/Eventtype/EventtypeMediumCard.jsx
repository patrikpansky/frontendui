import { EventtypeCardCapsule } from './EventtypeCardCapsule';
import { EventtypeCardBody } from './EventtypeCardBody';

export const EventtypeMediumCardFragment = `
fragment EventtypeMediumCardFragment on EventtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const EventtypeMediumCardConstant = ({ eventtype, children, label="" }) => {
    return (
        <EventtypeCardCapsule eventtype={ eventtype } label={label} >
            <EventtypeCardBody eventtype={ eventtype }>
                {children}
            </EventtypeCardBody>
        </EventtypeCardCapsule>        
    )
}
export let EventtypeMediumCard = EventtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => EventtypeMediumCard = newMediumCard