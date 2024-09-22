// field state
// targeting to State
// going from Form
import { StateMediumCard } from "../State/StateMediumCard";

export const FormStateMediumCard = ({ form , ...props}) => {
    return (
        <StateMediumCard state={ form?.state } {...props} />
    )
}