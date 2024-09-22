// field changedby
// targeting to User
// going from Group
import { UserMediumCard } from "../User/UserMediumCard";

export const GroupChangedbyMediumCard = ({ group , ...props}) => {
    return (
        <UserMediumCard user={ group?.changedby } {...props} />
    )
}