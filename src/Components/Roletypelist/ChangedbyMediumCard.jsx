// field changedby
// targeting to User
// going from Roletypelist
import { UserMediumCard } from "../User/UserMediumCard";

export const RoletypelistChangedbyMediumCard = ({ roletypelist , ...props}) => {
    return (
        <UserMediumCard user={ roletypelist?.changedby } {...props} />
    )
}