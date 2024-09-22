// field rbacobject
// targeting to RBACObject
// going from Plannedlesson
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const PlannedlessonRbacobjectMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ plannedlesson?.rbacobject } {...props} />
    )
}