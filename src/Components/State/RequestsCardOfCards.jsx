// field requests
// targeting to Request
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { RequestsCards } from "../Request/RequestsCards";
import { StateRequestsLoadMoreButton as LoadMoreButton} from "../State/RequestsLoadMoreButton";

export const StateRequestsCardOfCards = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StateCardCapsule state={ state } label={"Requests"}>
            <RequestsCards requests={ state?.requests } {...props} >
                <LoadMoreButton state={ state } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RequestsCards>
        </StateCardCapsule>
    )
}