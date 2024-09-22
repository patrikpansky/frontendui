// field createdby
// targeting to User
// going from Formitem
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemCreatedbyMediumCard = ({ formitem , ...props}) => {
    return (
        <UserMediumCard user={ formitem?.createdby } {...props} />
    )
}