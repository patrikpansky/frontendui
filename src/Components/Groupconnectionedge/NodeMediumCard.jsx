// field node
// targeting to Group
// going from Groupconnectionedge
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const GroupconnectionedgeNodeMediumCard = ({ groupconnectionedge , ...props}) => {
    return (
        <GroupMediumCard group={ groupconnectionedge?.node } {...props} />
    )
}