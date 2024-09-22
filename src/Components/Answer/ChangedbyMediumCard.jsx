// field changedby
// targeting to User
// going from Answer
import { UserMediumCard } from "../User/UserMediumCard";

export const AnswerChangedbyMediumCard = ({ answer , ...props}) => {
    return (
        <UserMediumCard user={ answer?.changedby } {...props} />
    )
}