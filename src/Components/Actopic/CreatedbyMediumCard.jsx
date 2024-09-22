// field createdby
// targeting to User
// going from Actopic
import { UserMediumCard } from "../User/UserMediumCard";

export const ActopicCreatedbyMediumCard = ({ actopic , ...props}) => {
    return (
        <UserMediumCard user={ actopic?.createdby } {...props} />
    )
}