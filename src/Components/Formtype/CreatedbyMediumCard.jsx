// field createdby
// targeting to User
// going from Formtype
import { UserMediumCard } from "../User/UserMediumCard";

export const FormtypeCreatedbyMediumCard = ({ formtype , ...props}) => {
    return (
        <UserMediumCard user={ formtype?.createdby } {...props} />
    )
}