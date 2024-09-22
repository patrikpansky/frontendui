// field transitions
// targeting to StateTransition
// going from Statemachine
import { StatetransitionsTable } from "../Statetransition/StatetransitionsTable";
import { StatetransitionLoadMoreButton } from "../Statetransition/StatetransitionLoadMoreButton";

export const StatemachineTransitionsTableCard = ({ statemachine, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StatetransitionsTable statetransition={ statemachine?.transitions } {...props}>
            <StatetransitionLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </StatetransitionsTable>
    )
}