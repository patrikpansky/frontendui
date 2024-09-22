// field createdby
// targeting to User
// going from Group
import { UserMediumCard } from "../User/UserMediumCard";

export const GroupCreatedbyMediumCard = ({ group , ...props}) => {
    return (
        <UserMediumCard user={ group?.createdby } {...props} />
    )
}