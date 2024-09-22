// field rbacobject
// targeting to RBACObject
// going from Project
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const ProjectRbacobjectMediumCard = ({ project , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ project?.rbacobject } {...props} />
    )
}