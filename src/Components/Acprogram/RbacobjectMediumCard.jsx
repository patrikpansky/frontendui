// field rbacobject
// targeting to RBACObject
// going from Acprogram
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const AcprogramRbacobjectMediumCard = ({ acprogram , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ acprogram?.rbacobject } {...props} />
    )
}