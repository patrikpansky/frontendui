// field changedby
// targeting to User
// going from Acclassification
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationChangedbyMediumCard = ({ acclassification , ...props}) => {
    return (
        <UserMediumCard user={ acclassification?.changedby } {...props} />
    )
}