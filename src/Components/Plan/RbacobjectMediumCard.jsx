// field rbacobject
// targeting to RBACObject
// going from Plan
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const PlanRbacobjectMediumCard = ({ plan , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ plan?.rbacobject } {...props} />
    )
}