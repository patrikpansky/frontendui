// field changedby
// targeting to User
// going from Formpart
import { UserMediumCard } from "../User/UserMediumCard";

export const FormpartChangedbyMediumCard = ({ formpart , ...props}) => {
    return (
        <UserMediumCard user={ formpart?.changedby } {...props} />
    )
}