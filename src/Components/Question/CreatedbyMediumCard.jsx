// field createdby
// targeting to User
// going from Question
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestionCreatedbyMediumCard = ({ question , ...props}) => {
    return (
        <UserMediumCard user={ question?.createdby } {...props} />
    )
}