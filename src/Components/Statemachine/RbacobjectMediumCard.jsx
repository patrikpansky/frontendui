// field rbacobject
// targeting to RBACObject
// going from Statemachine
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const StatemachineRbacobjectMediumCard = ({ statemachine , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ statemachine?.rbacobject } {...props} />
    )
}