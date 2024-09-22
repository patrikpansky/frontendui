// field rbacobject
// targeting to RBACObject
// going from Milestone
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const MilestoneRbacobjectMediumCard = ({ milestone , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ milestone?.rbacobject } {...props} />
    )
}