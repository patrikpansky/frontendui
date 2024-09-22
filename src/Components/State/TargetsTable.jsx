// field targets
// targeting to StateTransition
// going from State
import { StatetransitionsTable } from "../Statetransition/StatetransitionsTable";
import { StatetransitionLoadMoreButton } from "../Statetransition/StatetransitionLoadMoreButton";

export const StateTargetsTableCard = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StatetransitionsTable statetransition={ state?.targets } {...props}>
            <StatetransitionLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </StatetransitionsTable>
    )
}