// field changedby
// targeting to User
// going from Groupcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const GroupcategoryChangedbyMediumCard = ({ groupcategory , ...props}) => {
    return (
        <UserMediumCard user={ groupcategory?.changedby } {...props} />
    )
}