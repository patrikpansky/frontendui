// field changedby
// targeting to User
// going from Statetransition
import { UserMediumCard } from "../User/UserMediumCard";

export const StatetransitionChangedbyMediumCard = ({ statetransition , ...props}) => {
    return (
        <UserMediumCard user={ statetransition?.changedby } {...props} />
    )
}