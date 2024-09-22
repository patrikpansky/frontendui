// field changedby
// targeting to User
// going from Roletype
import { UserMediumCard } from "../User/UserMediumCard";

export const RoletypeChangedbyMediumCard = ({ roletype , ...props}) => {
    return (
        <UserMediumCard user={ roletype?.changedby } {...props} />
    )
}