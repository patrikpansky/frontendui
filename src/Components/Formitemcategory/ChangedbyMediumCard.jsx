// field changedby
// targeting to User
// going from Formitemcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemcategoryChangedbyMediumCard = ({ formitemcategory , ...props}) => {
    return (
        <UserMediumCard user={ formitemcategory?.changedby } {...props} />
    )
}