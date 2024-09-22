// field createdby
// targeting to User
// going from Questionvalue
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestionvalueCreatedbyMediumCard = ({ questionvalue , ...props}) => {
    return (
        <UserMediumCard user={ questionvalue?.createdby } {...props} />
    )
}