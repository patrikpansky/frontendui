// field changedby
// targeting to User
// going from Presencetype
import { UserMediumCard } from "../User/UserMediumCard";

export const PresencetypeChangedbyMediumCard = ({ presencetype , ...props}) => {
    return (
        <UserMediumCard user={ presencetype?.changedby } {...props} />
    )
}