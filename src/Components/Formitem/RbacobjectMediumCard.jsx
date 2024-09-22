// field rbacobject
// targeting to RBACObject
// going from Formitem
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormitemRbacobjectMediumCard = ({ formitem , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formitem?.rbacobject } {...props} />
    )
}