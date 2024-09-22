// field changedby
// targeting to User
// going from Questionvalue
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestionvalueChangedbyMediumCard = ({ questionvalue , ...props}) => {
    return (
        <UserMediumCard user={ questionvalue?.changedby } {...props} />
    )
}