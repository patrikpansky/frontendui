// field roles
// targeting to Role
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RolesTable } from "../Role/RolesTable";
export const UserRolesTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <RolesTable roles={ user?.roles } {...props}>
            </RolesTable>
        </UserCardCapsule>
    )
}