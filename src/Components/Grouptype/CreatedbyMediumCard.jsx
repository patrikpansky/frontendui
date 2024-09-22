// field createdby
// targeting to User
// going from Grouptype
import { UserMediumCard } from "../User/UserMediumCard";

export const GrouptypeCreatedbyMediumCard = ({ grouptype , ...props}) => {
    return (
        <UserMediumCard user={ grouptype?.createdby } {...props} />
    )
}