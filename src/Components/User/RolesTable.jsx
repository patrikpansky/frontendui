// field roles
// targeting to Role
// going from User
import { RolesTable } from "../Role/RolesTable";
import { RoleLoadMoreButton } from "../Role/RoleLoadMoreButton";

export const UserRolesTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RolesTable role={ user?.roles } {...props}>
            <RoleLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RolesTable>
    )
}