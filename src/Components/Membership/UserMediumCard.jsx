// field user
// targeting to User
// going from Membership
import { UserMediumCard } from "../User/UserMediumCard";

export const MembershipUserMediumCard = ({ membership , ...props}) => {
    return (
        <UserMediumCard user={ membership?.user } {...props} />
    )
}