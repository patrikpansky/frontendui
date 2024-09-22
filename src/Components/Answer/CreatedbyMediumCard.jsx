// field createdby
// targeting to User
// going from Answer
import { UserMediumCard } from "../User/UserMediumCard";

export const AnswerCreatedbyMediumCard = ({ answer , ...props}) => {
    return (
        <UserMediumCard user={ answer?.createdby } {...props} />
    )
}