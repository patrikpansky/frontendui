// field states
// targeting to State
// going from Statemachine
import { StatesTable } from "../State/StatesTable";
import { StateLoadMoreButton } from "../State/StateLoadMoreButton";

export const StatemachineStatesTableCard = ({ statemachine, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StatesTable state={ statemachine?.states } {...props}>
            <StateLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </StatesTable>
    )
}