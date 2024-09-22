import { InvitationtypeCardCapsule } from './InvitationtypeCardCapsule';
import { InvitationtypeCardBody } from './InvitationtypeCardBody';

export const InvitationtypeMediumCardFragment = `
fragment InvitationtypeMediumCardFragment on InvitationtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const InvitationtypeMediumCardConstant = ({ invitationtype, children, label="" }) => {
    return (
        <InvitationtypeCardCapsule invitationtype={ invitationtype } label={label} >
            <InvitationtypeCardBody invitationtype={ invitationtype }>
                {children}
            </InvitationtypeCardBody>
        </InvitationtypeCardCapsule>        
    )
}
export let InvitationtypeMediumCard = InvitationtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => InvitationtypeMediumCard = newMediumCard