// field node
// targeting to User
// going from Userconnectionedge
import { UserMediumCard } from "../User/UserMediumCard";

export const UserconnectionedgeNodeMediumCard = ({ userconnectionedge , ...props}) => {
    return (
        <UserMediumCard user={ userconnectionedge?.node } {...props} />
    )
}