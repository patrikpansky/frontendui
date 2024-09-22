// field changedby
// targeting to User
// going from Projecttype
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjecttypeChangedbyMediumCard = ({ projecttype , ...props}) => {
    return (
        <UserMediumCard user={ projecttype?.changedby } {...props} />
    )
}