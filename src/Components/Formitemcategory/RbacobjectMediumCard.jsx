// field rbacobject
// targeting to RBACObject
// going from Formitemcategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormitemcategoryRbacobjectMediumCard = ({ formitemcategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formitemcategory?.rbacobject } {...props} />
    )
}