// field createdby
// targeting to User
// going from Formpart
import { UserMediumCard } from "../User/UserMediumCard";

export const FormpartCreatedbyMediumCard = ({ formpart , ...props}) => {
    return (
        <UserMediumCard user={ formpart?.createdby } {...props} />
    )
}