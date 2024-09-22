// field group
// targeting to Group
// going from Project
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const ProjectGroupMediumCard = ({ project , ...props}) => {
    return (
        <GroupMediumCard group={ project?.group } {...props} />
    )
}