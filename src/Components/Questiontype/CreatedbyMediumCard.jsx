// field createdby
// targeting to User
// going from Questiontype
import { UserMediumCard } from "../User/UserMediumCard";

export const QuestiontypeCreatedbyMediumCard = ({ questiontype , ...props}) => {
    return (
        <UserMediumCard user={ questiontype?.createdby } {...props} />
    )
}