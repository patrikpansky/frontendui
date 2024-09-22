// field edges
// targeting to GroupConnectionEdge
// going from Groupconnection
import { GroupconnectionCardCapsule } from "./GroupconnectionCardCapsule";
import { GroupconnectionedgesTable } from "../Groupconnectionedge/GroupconnectionedgesTable";
export const GroupconnectionEdgesTableCard = ({ groupconnection , ...props}) => {
    return (
        <GroupconnectionCardCapsule groupconnection={ groupconnection } >
            <GroupconnectionedgesTable groupconnectionedges={ groupconnection?.edges } {...props}>
            </GroupconnectionedgesTable>
        </GroupconnectionCardCapsule>
    )
}