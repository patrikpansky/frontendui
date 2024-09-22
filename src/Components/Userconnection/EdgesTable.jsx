// field edges
// targeting to UserConnectionEdge
// going from Userconnection
import { UserconnectionedgesTable } from "../Userconnectionedge/UserconnectionedgesTable";
import { UserconnectionedgeLoadMoreButton } from "../Userconnectionedge/UserconnectionedgeLoadMoreButton";

export const UserconnectionEdgesTableCard = ({ userconnection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserconnectionedgesTable userconnectionedge={ userconnection?.edges } {...props}>
            <UserconnectionedgeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </UserconnectionedgesTable>
    )
}