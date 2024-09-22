// field createdby
// targeting to User
// going from Acsubject
import { UserMediumCard } from "../User/UserMediumCard";

export const AcsubjectCreatedbyMediumCard = ({ acsubject , ...props}) => {
    return (
        <UserMediumCard user={ acsubject?.createdby } {...props} />
    )
}