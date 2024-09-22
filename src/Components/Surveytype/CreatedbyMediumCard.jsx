// field createdby
// targeting to User
// going from Surveytype
import { UserMediumCard } from "../User/UserMediumCard";

export const SurveytypeCreatedbyMediumCard = ({ surveytype , ...props}) => {
    return (
        <UserMediumCard user={ surveytype?.createdby } {...props} />
    )
}