// field requests
// targeting to Request
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RequestsTable } from "../Request/RequestsTable";
export const UserRequestsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <RequestsTable requests={ user?.requests } {...props}>
            </RequestsTable>
        </UserCardCapsule>
    )
}