// field rbacobject
// targeting to RBACObject
// going from User
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const UserRbacobjectMediumCard = ({ user , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ user?.rbacobject } {...props} />
    )
}