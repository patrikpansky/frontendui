// field rbacobject
// targeting to RBACObject
// going from State
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const StateRbacobjectMediumCard = ({ state , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ state?.rbacobject } {...props} />
    )
}