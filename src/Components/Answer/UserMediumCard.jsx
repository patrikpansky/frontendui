// field user
// targeting to User
// going from Answer
import { UserMediumCard } from "../User/UserMediumCard";

export const AnswerUserMediumCard = ({ answer , ...props}) => {
    return (
        <UserMediumCard user={ answer?.user } {...props} />
    )
}