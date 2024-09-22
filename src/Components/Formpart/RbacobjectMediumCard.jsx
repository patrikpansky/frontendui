// field rbacobject
// targeting to RBACObject
// going from Formpart
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormpartRbacobjectMediumCard = ({ formpart , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formpart?.rbacobject } {...props} />
    )
}