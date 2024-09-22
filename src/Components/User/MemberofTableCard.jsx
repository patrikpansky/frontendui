// field memberof
// targeting to Group
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { GroupsTable } from "../Group/GroupsTable";
export const UserMemberofTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <GroupsTable groups={ user?.memberof } {...props}>
            </GroupsTable>
        </UserCardCapsule>
    )
}