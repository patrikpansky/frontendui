// field requests
// targeting to Request
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { RequestsTable } from "../Request/RequestsTable";
export const StateRequestsTableCard = ({ state , ...props}) => {
    return (
        <StateCardCapsule state={ state } >
            <RequestsTable requests={ state?.requests } {...props}>
            </RequestsTable>
        </StateCardCapsule>
    )
}