// field createdby
// targeting to User
// going from Formitemtype
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemtypeCreatedbyMediumCard = ({ formitemtype , ...props}) => {
    return (
        <UserMediumCard user={ formitemtype?.createdby } {...props} />
    )
}