// field roles
// targeting to Role
// going from Group
import { RolesTable } from "../Role/RolesTable";
import { RoleLoadMoreButton } from "../Role/RoleLoadMoreButton";

export const GroupRolesTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RolesTable role={ group?.roles } {...props}>
            <RoleLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RolesTable>
    )
}