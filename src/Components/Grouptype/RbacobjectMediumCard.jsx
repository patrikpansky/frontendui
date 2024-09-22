// field rbacobject
// targeting to RBACObject
// going from Grouptype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const GrouptypeRbacobjectMediumCard = ({ grouptype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ grouptype?.rbacobject } {...props} />
    )
}