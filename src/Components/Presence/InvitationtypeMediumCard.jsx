// field invitationtype
// targeting to InvitationType
// going from Presence
import { InvitationtypeMediumCard } from "../Invitationtype/InvitationtypeMediumCard";

export const PresenceInvitationtypeMediumCard = ({ presence , ...props}) => {
    return (
        <InvitationtypeMediumCard invitationtype={ presence?.invitationtype } {...props} />
    )
}