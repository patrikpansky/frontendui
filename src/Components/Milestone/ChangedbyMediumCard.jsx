// field changedby
// targeting to User
// going from Milestone
import { UserMediumCard } from "../User/UserMediumCard";

export const MilestoneChangedbyMediumCard = ({ milestone , ...props}) => {
    return (
        <UserMediumCard user={ milestone?.changedby } {...props} />
    )
}