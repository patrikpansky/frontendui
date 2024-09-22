// field rbacobject
// targeting to RBACObject
// going from Formtype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormtypeRbacobjectMediumCard = ({ formtype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formtype?.rbacobject } {...props} />
    )
}