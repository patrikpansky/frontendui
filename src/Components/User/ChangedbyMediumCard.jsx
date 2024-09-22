// field changedby
// targeting to User
// going from User
import { UserMediumCard } from "../User/UserMediumCard";

export const UserChangedbyMediumCard = ({ user , ...props}) => {
    return (
        <UserMediumCard user={ user?.changedby } {...props} />
    )
}