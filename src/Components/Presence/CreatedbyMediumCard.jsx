// field createdby
// targeting to User
// going from Presence
import { UserMediumCard } from "../User/UserMediumCard";

export const PresenceCreatedbyMediumCard = ({ presence , ...props}) => {
    return (
        <UserMediumCard user={ presence?.createdby } {...props} />
    )
}