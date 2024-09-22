// field changedby
// targeting to User
// going from Formitem
import { UserMediumCard } from "../User/UserMediumCard";

export const FormitemChangedbyMediumCard = ({ formitem , ...props}) => {
    return (
        <UserMediumCard user={ formitem?.changedby } {...props} />
    )
}