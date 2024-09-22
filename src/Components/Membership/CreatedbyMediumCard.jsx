// field createdby
// targeting to User
// going from Membership
import { UserMediumCard } from "../User/UserMediumCard";

export const MembershipCreatedbyMediumCard = ({ membership , ...props}) => {
    return (
        <UserMediumCard user={ membership?.createdby } {...props} />
    )
}