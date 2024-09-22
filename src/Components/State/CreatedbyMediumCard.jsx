// field createdby
// targeting to User
// going from State
import { UserMediumCard } from "../User/UserMediumCard";

export const StateCreatedbyMediumCard = ({ state , ...props}) => {
    return (
        <UserMediumCard user={ state?.createdby } {...props} />
    )
}