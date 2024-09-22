// field rbacobject
// targeting to RBACObject
// going from Projecttype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const ProjecttypeRbacobjectMediumCard = ({ projecttype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ projecttype?.rbacobject } {...props} />
    )
}