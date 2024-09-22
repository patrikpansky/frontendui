// field histories
// targeting to RequestHistory
// going from Request
import { RequestCardCapsule } from "./RequestCardCapsule";
import { RequesthistorysCards } from "../Requesthistory/RequesthistorysCards";
import { RequestHistoriesLoadMoreButton as LoadMoreButton} from "../Request/HistoriesLoadMoreButton";

export const RequestHistoriesCardOfCards = ({ request, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RequestCardCapsule request={ request } label={"Histories"}>
            <RequesthistorysCards requesthistorys={ request?.histories } {...props} >
                <LoadMoreButton request={ request } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RequesthistorysCards>
        </RequestCardCapsule>
    )
}