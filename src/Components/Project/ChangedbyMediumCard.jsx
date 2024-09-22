// field changedby
// targeting to User
// going from Project
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjectChangedbyMediumCard = ({ project , ...props}) => {
    return (
        <UserMediumCard user={ project?.changedby } {...props} />
    )
}