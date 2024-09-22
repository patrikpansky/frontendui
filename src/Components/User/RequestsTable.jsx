// field requests
// targeting to Request
// going from User
import { RequestsTable } from "../Request/RequestsTable";
import { RequestLoadMoreButton } from "../Request/RequestLoadMoreButton";

export const UserRequestsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RequestsTable request={ user?.requests } {...props}>
            <RequestLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RequestsTable>
    )
}