// field statemachine
// targeting to StateMachine
// going from State
import { StatemachineMediumCard } from "../Statemachine/StatemachineMediumCard";

export const StateStatemachineMediumCard = ({ state , ...props}) => {
    return (
        <StatemachineMediumCard statemachine={ state?.statemachine } {...props} />
    )
}