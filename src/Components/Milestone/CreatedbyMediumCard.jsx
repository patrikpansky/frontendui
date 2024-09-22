// field createdby
// targeting to User
// going from Milestone
import { UserMediumCard } from "../User/UserMediumCard";

export const MilestoneCreatedbyMediumCard = ({ milestone , ...props}) => {
    return (
        <UserMediumCard user={ milestone?.createdby } {...props} />
    )
}