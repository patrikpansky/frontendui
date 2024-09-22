// field createdby
// targeting to User
// going from Formcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FormcategoryCreatedbyMediumCard = ({ formcategory , ...props}) => {
    return (
        <UserMediumCard user={ formcategory?.createdby } {...props} />
    )
}