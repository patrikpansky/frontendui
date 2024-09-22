// field users
// targeting to User
// going from Event
import { UsersTable } from "../User/UsersTable";
import { UserLoadMoreButton } from "../User/UserLoadMoreButton";

export const EventUsersTableCard = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UsersTable user={ event?.users } {...props}>
            <UserLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </UsersTable>
    )
}