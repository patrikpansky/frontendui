// field changedby
// targeting to User
// going from Aclesson
import { UserMediumCard } from "../User/UserMediumCard";

export const AclessonChangedbyMediumCard = ({ aclesson , ...props}) => {
    return (
        <UserMediumCard user={ aclesson?.changedby } {...props} />
    )
}