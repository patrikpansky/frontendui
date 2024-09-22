// field changedby
// targeting to User
// going from Projectcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjectcategoryChangedbyMediumCard = ({ projectcategory , ...props}) => {
    return (
        <UserMediumCard user={ projectcategory?.changedby } {...props} />
    )
}