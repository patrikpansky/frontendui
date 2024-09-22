// field rbacobject
// targeting to RBACObject
// going from Statementofwork
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const StatementofworkRbacobjectMediumCard = ({ statementofwork , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ statementofwork?.rbacobject } {...props} />
    )
}