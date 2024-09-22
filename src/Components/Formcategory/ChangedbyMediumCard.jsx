// field changedby
// targeting to User
// going from Formcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FormcategoryChangedbyMediumCard = ({ formcategory , ...props}) => {
    return (
        <UserMediumCard user={ formcategory?.changedby } {...props} />
    )
}