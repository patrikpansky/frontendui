// field changedby
// targeting to User
// going from Questiontype
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestiontypeChangedbyMediumCard = ({ questiontype , ...props}) => {
    return (
        <UserMediumCard user={ questiontype?.changedby } {...props} />
    )
}