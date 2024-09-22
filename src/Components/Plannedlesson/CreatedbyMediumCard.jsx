// field createdby
// targeting to User
// going from Plannedlesson
import { UserMediumCard } from "../User/UserMediumCard";

export const PlannedlessonCreatedbyMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <UserMediumCard user={ plannedlesson?.createdby } {...props} />
    )
}