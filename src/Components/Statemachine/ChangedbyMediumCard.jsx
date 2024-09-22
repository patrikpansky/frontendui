// field changedby
// targeting to User
// going from Statemachine
import { UserMediumCard } from "../User/UserMediumCard";

export const StatemachineChangedbyMediumCard = ({ statemachine , ...props}) => {
    return (
        <UserMediumCard user={ statemachine?.changedby } {...props} />
    )
}