// field users
// targeting to User
// going from Plannedlesson
import { UsersTable } from "../User/UsersTable";
import { UserLoadMoreButton } from "../User/UserLoadMoreButton";

export const PlannedlessonUsersTableCard = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UsersTable user={ plannedlesson?.users } {...props}>
            <UserLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </UsersTable>
    )
}