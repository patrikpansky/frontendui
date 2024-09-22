// field createdby
// targeting to User
// going from Statemachine
import { UserMediumCard } from "../User/UserMediumCard";

export const StatemachineCreatedbyMediumCard = ({ statemachine , ...props}) => {
    return (
        <UserMediumCard user={ statemachine?.createdby } {...props} />
    )
}