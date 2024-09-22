// field roles
// targeting to Role
// going from Rbacobject
import { RbacobjectCardCapsule } from "./RbacobjectCardCapsule";
import { RolesCards } from "../Role/RolesCards";
import { RbacobjectRolesLoadMoreButton as LoadMoreButton} from "../Rbacobject/RolesLoadMoreButton";

export const RbacobjectRolesCardOfCards = ({ rbacobject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RbacobjectCardCapsule rbacobject={ rbacobject } label={"Roles"}>
            <RolesCards roles={ rbacobject?.roles } {...props} >
                <LoadMoreButton rbacobject={ rbacobject } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RolesCards>
        </RbacobjectCardCapsule>
    )
}