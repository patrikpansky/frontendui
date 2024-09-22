// field changedby
// targeting to User
// going from Acclassificationlevel
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationlevelChangedbyMediumCard = ({ acclassificationlevel , ...props}) => {
    return (
        <UserMediumCard user={ acclassificationlevel?.changedby } {...props} />
    )
}