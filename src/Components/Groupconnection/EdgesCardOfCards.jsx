// field edges
// targeting to GroupConnectionEdge
// going from Groupconnection
import { GroupconnectionCardCapsule } from "./GroupconnectionCardCapsule";
import { GroupconnectionedgesCards } from "../Groupconnectionedge/GroupconnectionedgesCards";
import { GroupconnectionEdgesLoadMoreButton as LoadMoreButton} from "../Groupconnection/EdgesLoadMoreButton";

export const GroupconnectionEdgesCardOfCards = ({ groupconnection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupconnectionCardCapsule groupconnection={ groupconnection } label={"Edges"}>
            <GroupconnectionedgesCards groupconnectionedges={ groupconnection?.edges } {...props} >
                <LoadMoreButton groupconnection={ groupconnection } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GroupconnectionedgesCards>
        </GroupconnectionCardCapsule>
    )
}