// field rbacobject
// targeting to RBACObject
// going from Form
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormRbacobjectMediumCard = ({ form , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ form?.rbacobject } {...props} />
    )
}