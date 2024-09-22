// field createdby
// targeting to User
// going from Formitemcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemcategoryCreatedbyMediumCard = ({ formitemcategory , ...props}) => {
    return (
        <UserMediumCard user={ formitemcategory?.createdby } {...props} />
    )
}