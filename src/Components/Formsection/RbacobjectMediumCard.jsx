// field rbacobject
// targeting to RBACObject
// going from Formsection
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FormsectionRbacobjectMediumCard = ({ formsection , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ formsection?.rbacobject } {...props} />
    )
}