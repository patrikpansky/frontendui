// field grouptype
// targeting to GroupType
// going from Group
import { GrouptypeMediumCard } from "../Grouptype/GrouptypeMediumCard";

export const GroupGrouptypeMediumCard = ({ group , ...props}) => {
    return (
        <GrouptypeMediumCard grouptype={ group?.grouptype } {...props} />
    )
}