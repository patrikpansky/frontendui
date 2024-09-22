// field changedby
// targeting to User
// going from Invitationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const InvitationtypeChangedbyMediumCard = ({ invitationtype , ...props}) => {
    return (
        <UserMediumCard user={ invitationtype?.changedby } {...props} />
    )
}