// field team
// targeting to Group
// going from Project
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const ProjectTeamMediumCard = ({ project , ...props}) => {
    return (
        <GroupMediumCard group={ project?.team } {...props} />
    )
}