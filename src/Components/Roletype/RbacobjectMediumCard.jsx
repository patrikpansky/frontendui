// field rbacobject
// targeting to RBACObject
// going from Roletype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const RoletypeRbacobjectMediumCard = ({ roletype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ roletype?.rbacobject } {...props} />
    )
}