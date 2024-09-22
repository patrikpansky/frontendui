// field createdby
// targeting to User
// going from Projectcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjectcategoryCreatedbyMediumCard = ({ projectcategory , ...props}) => {
    return (
        <UserMediumCard user={ projectcategory?.createdby } {...props} />
    )
}