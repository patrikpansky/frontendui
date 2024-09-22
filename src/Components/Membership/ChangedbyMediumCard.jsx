// field changedby
// targeting to User
// going from Membership
import { UserMediumCard } from "../User/UserMediumCard";

export const MembershipChangedbyMediumCard = ({ membership , ...props}) => {
    return (
        <UserMediumCard user={ membership?.changedby } {...props} />
    )
}