// field changedby
// targeting to User
// going from Plannedlesson
import { UserMediumCard } from "../User/UserMediumCard";

export const PlannedlessonChangedbyMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <UserMediumCard user={ plannedlesson?.changedby } {...props} />
    )
}