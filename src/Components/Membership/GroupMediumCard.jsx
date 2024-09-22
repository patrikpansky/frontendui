// field group
// targeting to Group
// going from Membership
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const MembershipGroupMediumCard = ({ membership , ...props}) => {
    return (
        <GroupMediumCard group={ membership?.group } {...props} />
    )
}