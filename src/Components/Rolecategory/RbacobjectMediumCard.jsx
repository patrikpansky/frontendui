// field rbacobject
// targeting to RBACObject
// going from Rolecategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const RolecategoryRbacobjectMediumCard = ({ rolecategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ rolecategory?.rbacobject } {...props} />
    )
}