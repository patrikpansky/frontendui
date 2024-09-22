// field category
// targeting to RoleCategory
// going from Roletype
import { RolecategoryMediumCard } from "../Rolecategory/RolecategoryMediumCard";

export const RoletypeCategoryMediumCard = ({ roletype , ...props}) => {
    return (
        <RolecategoryMediumCard rolecategory={ roletype?.category } {...props} />
    )
}