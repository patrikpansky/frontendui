// field user
// targeting to User
// going from Presence
import { UserMediumCard } from "../User/UserMediumCard";

export const PresenceUserMediumCard = ({ presence , ...props}) => {
    return (
        <UserMediumCard user={ presence?.user } {...props} />
    )
}