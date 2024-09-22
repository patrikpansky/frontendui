// field changedby
// targeting to User
// going from Plan
import { UserMediumCard } from "../User/UserMediumCard";

export const PlanChangedbyMediumCard = ({ plan , ...props}) => {
    return (
        <UserMediumCard user={ plan?.changedby } {...props} />
    )
}