// field changedby
// targeting to User
// going from Question
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestionChangedbyMediumCard = ({ question , ...props}) => {
    return (
        <UserMediumCard user={ question?.changedby } {...props} />
    )
}