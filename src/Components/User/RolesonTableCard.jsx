// field roleson
// targeting to Role
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RolesTable } from "../Role/RolesTable";
export const UserRolesonTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <RolesTable roles={ user?.roleson } {...props}>
            </RolesTable>
        </UserCardCapsule>
    )
}