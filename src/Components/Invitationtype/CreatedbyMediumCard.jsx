// field createdby
// targeting to User
// going from Invitationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const InvitationtypeCreatedbyMediumCard = ({ invitationtype , ...props}) => {
    return (
        <UserMediumCard user={ invitationtype?.createdby } {...props} />
    )
}