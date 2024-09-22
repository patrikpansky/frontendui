// field changedby
// targeting to User
// going from Presence
import { UserMediumCard } from "../User/UserMediumCard";

export const PresenceChangedbyMediumCard = ({ presence , ...props}) => {
    return (
        <UserMediumCard user={ presence?.changedby } {...props} />
    )
}