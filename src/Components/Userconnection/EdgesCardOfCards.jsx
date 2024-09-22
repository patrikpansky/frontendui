// field edges
// targeting to UserConnectionEdge
// going from Userconnection
import { UserconnectionCardCapsule } from "./UserconnectionCardCapsule";
import { UserconnectionedgesCards } from "../Userconnectionedge/UserconnectionedgesCards";
import { UserconnectionEdgesLoadMoreButton as LoadMoreButton} from "../Userconnection/EdgesLoadMoreButton";

export const UserconnectionEdgesCardOfCards = ({ userconnection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserconnectionCardCapsule userconnection={ userconnection } label={"Edges"}>
            <UserconnectionedgesCards userconnectionedges={ userconnection?.edges } {...props} >
                <LoadMoreButton userconnection={ userconnection } skip={skip} limit={limit} orderby={orderby} where={where} />
            </UserconnectionedgesCards>
        </UserconnectionCardCapsule>
    )
}