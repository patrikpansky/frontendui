// field category
// targeting to GroupCategory
// going from Grouptype
import { GroupcategoryMediumCard } from "../Groupcategory/GroupcategoryMediumCard";

export const GrouptypeCategoryMediumCard = ({ grouptype , ...props}) => {
    return (
        <GroupcategoryMediumCard groupcategory={ grouptype?.category } {...props} />
    )
}