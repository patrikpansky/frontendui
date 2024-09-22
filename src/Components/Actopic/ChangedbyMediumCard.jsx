// field changedby
// targeting to User
// going from Actopic
import { UserMediumCard } from "../User/UserMediumCard";

export const ActopicChangedbyMediumCard = ({ actopic , ...props}) => {
    return (
        <UserMediumCard user={ actopic?.changedby } {...props} />
    )
}