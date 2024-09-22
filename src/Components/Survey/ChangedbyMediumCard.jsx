// field changedby
// targeting to User
// going from Survey
import { UserMediumCard } from "../User/UserMediumCard";

export const SurveyChangedbyMediumCard = ({ survey , ...props}) => {
    return (
        <UserMediumCard user={ survey?.changedby } {...props} />
    )
}