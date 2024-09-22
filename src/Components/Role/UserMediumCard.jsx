// field user
// targeting to User
// going from Role
import { UserMediumCard } from "../User/UserMediumCard";

export const RoleUserMediumCard = ({ role , ...props}) => {
    return (
        <UserMediumCard user={ role?.user } {...props} />
    )
}