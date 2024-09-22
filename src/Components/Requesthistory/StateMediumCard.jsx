// field state
// targeting to State
// going from Requesthistory
import { StateMediumCard } from "../State/StateMediumCard";

export const RequesthistoryStateMediumCard = ({ requesthistory , ...props}) => {
    return (
        <StateMediumCard state={ requesthistory?.state } {...props} />
    )
}