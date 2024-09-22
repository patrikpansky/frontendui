import { PublicationtypeCardCapsule } from './PublicationtypeCardCapsule';
import { PublicationtypeCardBody } from './PublicationtypeCardBody';

export const PublicationtypeMediumCardFragment = `
fragment PublicationtypeMediumCardFragment on PublicationtypeGQLModel {
        id
        name
        created
        lastchange
    }`

export const PublicationtypeMediumCardConstant = ({ publicationtype, children, label="" }) => {
    return (
        <PublicationtypeCardCapsule publicationtype={ publicationtype } label={label} >
            <PublicationtypeCardBody publicationtype={ publicationtype }>
                {children}
            </PublicationtypeCardBody>
        </PublicationtypeCardCapsule>        
    )
}
export let PublicationtypeMediumCard = PublicationtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => PublicationtypeMediumCard = newMediumCard