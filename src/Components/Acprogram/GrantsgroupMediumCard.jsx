// field grantsgroup
// targeting to Group
// going from Acprogram
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const AcprogramGrantsgroupMediumCard = ({ acprogram , ...props}) => {
    return (
        <GroupMediumCard group={ acprogram?.grantsgroup } {...props} />
    )
}