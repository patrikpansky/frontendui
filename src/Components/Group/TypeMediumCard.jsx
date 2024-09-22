// field type
// targeting to GroupType
// going from Group
import { GrouptypeMediumCard } from "../Grouptype/GrouptypeMediumCard";

export const GroupTypeMediumCard = ({ group , ...props}) => {
    return (
        <GrouptypeMediumCard grouptype={ group?.type } {...props} />
    )
}