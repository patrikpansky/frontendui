// field changedby
// targeting to User
// going from Formitemtype
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemtypeChangedbyMediumCard = ({ formitemtype , ...props}) => {
    return (
        <UserMediumCard user={ formitemtype?.changedby } {...props} />
    )
}