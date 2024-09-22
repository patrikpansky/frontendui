// field rbacobject
// targeting to RBACObject
// going from Financecategory
import { RbacobjectMediumCard } from "../Rbacobject/RbacobjectMediumCard";

export const FinancecategoryRbacobjectMediumCard = ({ financecategory , ...props}) => {
    return (
        <RbacobjectMediumCard rbacobject={ financecategory?.rbacobject } {...props} />
    )
}