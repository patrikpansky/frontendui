// field edges
// targeting to GroupConnectionEdge
// going from Groupconnection
import { GroupconnectionedgesTable } from "../Groupconnectionedge/GroupconnectionedgesTable";
import { GroupconnectionedgeLoadMoreButton } from "../Groupconnectionedge/GroupconnectionedgeLoadMoreButton";

export const GroupconnectionEdgesTableCard = ({ groupconnection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupconnectionedgesTable groupconnectionedge={ groupconnection?.edges } {...props}>
            <GroupconnectionedgeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GroupconnectionedgesTable>
    )
}