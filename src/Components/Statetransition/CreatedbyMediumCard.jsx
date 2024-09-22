// field createdby
// targeting to User
// going from Statetransition
import { UserMediumCard } from "../User/UserMediumCard";

export const StatetransitionCreatedbyMediumCard = ({ statetransition , ...props}) => {
    return (
        <UserMediumCard user={ statetransition?.createdby } {...props} />
    )
}