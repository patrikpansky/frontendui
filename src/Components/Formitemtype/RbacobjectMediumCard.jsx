// field rbacobject
// targeting to RBACObject
// going from Formitemtype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormitemtypeRbacobjectMediumCard = ({ formitemtype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formitemtype?.rbacobject } {...props} />
    )
}