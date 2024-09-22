// field group
// targeting to Group
// going from Facility
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const FacilityGroupMediumCard = ({ facility , ...props}) => {
    return (
        <GroupMediumCard group={ facility?.group } {...props} />
    )
}