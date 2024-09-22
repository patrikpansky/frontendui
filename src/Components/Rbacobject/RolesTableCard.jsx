// field roles
// targeting to Role
// going from Rbacobject
import { RbacobjectCardCapsule } from "./RbacobjectCardCapsule";
import { RolesTable } from "../Role/RolesTable";
export const RbacobjectRolesTableCard = ({ rbacobject , ...props}) => {
    return (
        <RbacobjectCardCapsule rbacobject={ rbacobject } >
            <RolesTable roles={ rbacobject?.roles } {...props}>
            </RolesTable>
        </RbacobjectCardCapsule>
    )
}