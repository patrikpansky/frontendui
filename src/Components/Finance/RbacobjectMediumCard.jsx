// field rbacobject
// targeting to RBACObject
// going from Finance
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FinanceRbacobjectMediumCard = ({ finance , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ finance?.rbacobject } {...props} />
    )
}