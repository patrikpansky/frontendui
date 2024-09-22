// field requests
// targeting to Request
// going from State
import { RequestsTable } from "../Request/RequestsTable";
import { RequestLoadMoreButton } from "../Request/RequestLoadMoreButton";

export const StateRequestsTableCard = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RequestsTable request={ state?.requests } {...props}>
            <RequestLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RequestsTable>
    )
}