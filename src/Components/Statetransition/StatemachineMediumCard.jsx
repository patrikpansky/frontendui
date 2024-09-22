// field statemachine
// targeting to StateMachine
// going from Statetransition
import { StatemachineMediumCard } from "../Statemachine/StatemachineMediumCard";

export const StatetransitionStatemachineMediumCard = ({ statetransition , ...props}) => {
    return (
        <StatemachineMediumCard statemachine={ statetransition?.statemachine } {...props} />
    )
}