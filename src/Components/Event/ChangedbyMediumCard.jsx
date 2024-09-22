// field changedby
// targeting to User
// going from Event
import { UserMediumCard } from "../User/UserMediumCard";

export const EventChangedbyMediumCard = ({ event , ...props}) => {
    return (
        <UserMediumCard user={ event?.changedby } {...props} />
    )
}