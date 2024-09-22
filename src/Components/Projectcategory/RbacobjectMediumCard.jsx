// field rbacobject
// targeting to RBACObject
// going from Projectcategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const ProjectcategoryRbacobjectMediumCard = ({ projectcategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ projectcategory?.rbacobject } {...props} />
    )
}