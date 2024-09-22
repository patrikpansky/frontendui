// field changedby
// targeting to User
// going from State
import { UserMediumCard } from "../User/UserMediumCard";

export const StateChangedbyMediumCard = ({ state , ...props}) => {
    return (
        <UserMediumCard user={ state?.changedby } {...props} />
    )
}