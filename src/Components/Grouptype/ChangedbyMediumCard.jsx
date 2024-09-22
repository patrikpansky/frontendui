// field changedby
// targeting to User
// going from Grouptype
import { UserMediumCard } from "../User/UserMediumCard";

export const GrouptypeChangedbyMediumCard = ({ grouptype , ...props}) => {
    return (
        <UserMediumCard user={ grouptype?.changedby } {...props} />
    )
}