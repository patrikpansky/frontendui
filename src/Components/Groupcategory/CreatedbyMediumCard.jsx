// field createdby
// targeting to User
// going from Groupcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const GroupcategoryCreatedbyMediumCard = ({ groupcategory , ...props}) => {
    return (
        <UserMediumCard user={ groupcategory?.createdby } {...props} />
    )
}