// field rbacobject
// targeting to RBACObject
// going from Financetype
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FinancetypeRbacobjectMediumCard = ({ financetype , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ financetype?.rbacobject } {...props} />
    )
}