// field rbacobject
// targeting to RBACObject
// going from Formcategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormcategoryRbacobjectMediumCard = ({ formcategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formcategory?.rbacobject } {...props} />
    )
}