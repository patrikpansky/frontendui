// field histories
// targeting to RequestHistory
// going from Request
import { RequesthistorysTable } from "../Requesthistory/RequesthistorysTable";
import { RequesthistoryLoadMoreButton } from "../Requesthistory/RequesthistoryLoadMoreButton";

export const RequestHistoriesTableCard = ({ request, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RequesthistorysTable requesthistory={ request?.histories } {...props}>
            <RequesthistoryLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RequesthistorysTable>
    )
}