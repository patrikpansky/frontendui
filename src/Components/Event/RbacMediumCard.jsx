// field rbac
// targeting to RBACObject
// going from Event
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const EventRbacMediumCard = ({ event , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ event?.rbac } {...props} />
    )
}