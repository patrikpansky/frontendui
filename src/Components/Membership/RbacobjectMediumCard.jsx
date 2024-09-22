// field rbacobject
// targeting to RBACObject
// going from Membership
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const MembershipRbacobjectMediumCard = ({ membership , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ membership?.rbacobject } {...props} />
    )
}