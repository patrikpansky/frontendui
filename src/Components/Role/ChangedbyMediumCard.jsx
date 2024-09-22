// field changedby
// targeting to User
// going from Role
import { UserMediumCard } from "../User/UserMediumCard";

export const RoleChangedbyMediumCard = ({ role , ...props}) => {
    return (
        <UserMediumCard user={ role?.changedby } {...props} />
    )
}