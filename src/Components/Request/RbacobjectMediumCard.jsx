// field rbacobject
// targeting to RBACObject
// going from Request
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const RequestRbacobjectMediumCard = ({ request , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ request?.rbacobject } {...props} />
    )
}