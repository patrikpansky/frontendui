// field createdby
// targeting to User
// going from Role
import { UserMediumCard } from "../User/UserMediumCard";

export const RoleCreatedbyMediumCard = ({ role , ...props}) => {
    return (
        <UserMediumCard user={ role?.createdby } {...props} />
    )
}