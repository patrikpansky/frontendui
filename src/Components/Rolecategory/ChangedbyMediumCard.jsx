// field changedby
// targeting to User
// going from Rolecategory
import { UserMediumCard } from "../User/UserMediumCard";

export const RolecategoryChangedbyMediumCard = ({ rolecategory , ...props}) => {
    return (
        <UserMediumCard user={ rolecategory?.changedby } {...props} />
    )
}