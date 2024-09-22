// field mastergroup
// targeting to Group
// going from Group
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const GroupMastergroupMediumCard = ({ group , ...props}) => {
    return (
        <GroupMediumCard group={ group?.mastergroup } {...props} />
    )
}