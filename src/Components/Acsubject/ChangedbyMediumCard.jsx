// field changedby
// targeting to User
// going from Acsubject
import { UserMediumCard } from "../User/UserMediumCard";

export const AcsubjectChangedbyMediumCard = ({ acsubject , ...props}) => {
    return (
        <UserMediumCard user={ acsubject?.changedby } {...props} />
    )
}