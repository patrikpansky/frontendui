// field edges
// targeting to UserConnectionEdge
// going from Userconnection
import { UserconnectionCardCapsule } from "./UserconnectionCardCapsule";
import { UserconnectionedgesTable } from "../Userconnectionedge/UserconnectionedgesTable";
export const UserconnectionEdgesTableCard = ({ userconnection , ...props}) => {
    return (
        <UserconnectionCardCapsule userconnection={ userconnection } >
            <UserconnectionedgesTable userconnectionedges={ userconnection?.edges } {...props}>
            </UserconnectionedgesTable>
        </UserconnectionCardCapsule>
    )
}