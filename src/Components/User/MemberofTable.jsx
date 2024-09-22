// field memberof
// targeting to Group
// going from User
import { GroupsTable } from "../Group/GroupsTable";
import { GroupLoadMoreButton } from "../Group/GroupLoadMoreButton";

export const UserMemberofTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupsTable group={ user?.memberof } {...props}>
            <GroupLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GroupsTable>
    )
}