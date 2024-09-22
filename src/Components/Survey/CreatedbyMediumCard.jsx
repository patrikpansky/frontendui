// field createdby
// targeting to User
// going from Survey
import { UserMediumCard } from "../User/UserMediumCard";

export const SurveyCreatedbyMediumCard = ({ survey , ...props}) => {
    return (
        <UserMediumCard user={ survey?.createdby } {...props} />
    )
}