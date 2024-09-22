// field transitions
// targeting to StateTransition
// going from Statemachine
import { StatemachineCardCapsule } from "./StatemachineCardCapsule";
import { StatetransitionsTable } from "../Statetransition/StatetransitionsTable";
export const StatemachineTransitionsTableCard = ({ statemachine , ...props}) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } >
            <StatetransitionsTable statetransitions={ statemachine?.transitions } {...props}>
            </StatetransitionsTable>
        </StatemachineCardCapsule>
    )
}