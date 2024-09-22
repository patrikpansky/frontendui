// field states
// targeting to State
// going from Statemachine
import { StatemachineCardCapsule } from "./StatemachineCardCapsule";
import { StatesTable } from "../State/StatesTable";
export const StatemachineStatesTableCard = ({ statemachine , ...props}) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } >
            <StatesTable states={ statemachine?.states } {...props}>
            </StatesTable>
        </StatemachineCardCapsule>
    )
}