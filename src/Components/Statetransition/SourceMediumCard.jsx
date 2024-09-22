// field source
// targeting to State
// going from Statetransition
import { StateMediumCard } from "../State/StateMediumCard";

export const StatetransitionSourceMediumCard = ({ statetransition , ...props}) => {
    return (
        <StateMediumCard state={ statetransition?.source } {...props} />
    )
}