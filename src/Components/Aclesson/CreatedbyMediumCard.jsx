// field createdby
// targeting to User
// going from Aclesson
import { UserMediumCard } from "../User/UserMediumCard";

export const AclessonCreatedbyMediumCard = ({ aclesson , ...props}) => {
    return (
        <UserMediumCard user={ aclesson?.createdby } {...props} />
    )
}