// field rbacobject
// targeting to RBACObject
// going from Role
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const RoleRbacobjectMediumCard = ({ role , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ role?.rbacobject } {...props} />
    )
}