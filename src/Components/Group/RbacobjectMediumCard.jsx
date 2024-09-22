// field rbacobject
// targeting to RBACObject
// going from Group
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const GroupRbacobjectMediumCard = ({ group , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ group?.rbacobject } {...props} />
    )
}