// field group
// targeting to Group
// going from Role
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const RoleGroupMediumCard = ({ role , ...props}) => {
    return (
        <GroupMediumCard group={ role?.group } {...props} />
    )
}