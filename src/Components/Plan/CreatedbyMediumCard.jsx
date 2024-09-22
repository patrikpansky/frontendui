// field createdby
// targeting to User
// going from Plan
import { UserMediumCard } from "../User/UserMediumCard";

export const PlanCreatedbyMediumCard = ({ plan , ...props}) => {
    return (
        <UserMediumCard user={ plan?.createdby } {...props} />
    )
}