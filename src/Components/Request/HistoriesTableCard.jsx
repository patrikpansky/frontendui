// field histories
// targeting to RequestHistory
// going from Request
import { RequestCardCapsule } from "./RequestCardCapsule";
import { RequesthistorysTable } from "../Requesthistory/RequesthistorysTable";
export const RequestHistoriesTableCard = ({ request , ...props}) => {
    return (
        <RequestCardCapsule request={ request } >
            <RequesthistorysTable requesthistorys={ request?.histories } {...props}>
            </RequesthistorysTable>
        </RequestCardCapsule>
    )
}