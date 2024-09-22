// field state
// targeting to State
// going from Request
import { StateMediumCard } from "../State/StateMediumCard";

export const RequestStateMediumCard = ({ request , ...props}) => {
    return (
        <StateMediumCard state={ request?.state } {...props} />
    )
}