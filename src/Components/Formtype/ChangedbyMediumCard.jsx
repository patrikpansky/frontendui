// field changedby
// targeting to User
// going from Formtype
import { UserMediumCard } from "../User/UserMediumCard";

export const FormtypeChangedbyMediumCard = ({ formtype , ...props}) => {
    return (
        <UserMediumCard user={ formtype?.changedby } {...props} />
    )
}