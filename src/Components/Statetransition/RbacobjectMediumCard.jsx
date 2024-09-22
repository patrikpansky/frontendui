// field rbacobject
// targeting to RBACObject
// going from Statetransition
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const StatetransitionRbacobjectMediumCard = ({ statetransition , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ statetransition?.rbacobject } {...props} />
    )
}