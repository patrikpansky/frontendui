// field createdby
// targeting to User
// going from Project
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjectCreatedbyMediumCard = ({ project , ...props}) => {
    return (
        <UserMediumCard user={ project?.createdby } {...props} />
    )
}