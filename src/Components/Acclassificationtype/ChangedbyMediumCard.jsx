// field changedby
// targeting to User
// going from Acclassificationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationtypeChangedbyMediumCard = ({ acclassificationtype , ...props}) => {
    return (
        <UserMediumCard user={ acclassificationtype?.changedby } {...props} />
    )
}