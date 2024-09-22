// field changedby
// targeting to User
// going from Eventtype
import { UserMediumCard } from "../User/UserMediumCard";

export const EventtypeChangedbyMediumCard = ({ eventtype , ...props}) => {
    return (
        <UserMediumCard user={ eventtype?.changedby } {...props} />
    )
}