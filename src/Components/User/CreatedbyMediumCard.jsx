// field createdby
// targeting to User
// going from User
import { UserMediumCard } from "../User/UserMediumCard";

export const UserCreatedbyMediumCard = ({ user , ...props}) => {
    return (
        <UserMediumCard user={ user?.createdby } {...props} />
    )
}