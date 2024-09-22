// field roles
// targeting to Role
// going from Rbacobject
import { RolesTable } from "../Role/RolesTable";
import { RoleLoadMoreButton } from "../Role/RoleLoadMoreButton";

export const RbacobjectRolesTableCard = ({ rbacobject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RolesTable role={ rbacobject?.roles } {...props}>
            <RoleLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RolesTable>
    )
}