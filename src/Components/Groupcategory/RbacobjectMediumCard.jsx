// field rbacobject
// targeting to RBACObject
// going from Groupcategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const GroupcategoryRbacobjectMediumCard = ({ groupcategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ groupcategory?.rbacobject } {...props} />
    )
}