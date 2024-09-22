// field target
// targeting to State
// going from Statetransition
import { StateMediumCard } from "../State/StateMediumCard";

export const StatetransitionTargetMediumCard = ({ statetransition , ...props}) => {
    return (
        <StateMediumCard state={ statetransition?.target } {...props} />
    )
}