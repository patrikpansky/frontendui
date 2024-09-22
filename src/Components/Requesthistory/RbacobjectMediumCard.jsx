// field rbacobject
// targeting to RBACObject
// going from Requesthistory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const RequesthistoryRbacobjectMediumCard = ({ requesthistory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ requesthistory?.rbacobject } {...props} />
    )
}