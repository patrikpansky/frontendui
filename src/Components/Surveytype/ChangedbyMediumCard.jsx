// field changedby
// targeting to User
// going from Surveytype
import { UserMediumCard } from "../User/UserMediumCard";

export const SurveytypeChangedbyMediumCard = ({ surveytype , ...props}) => {
    return (
        <UserMediumCard user={ surveytype?.changedby } {...props} />
    )
}