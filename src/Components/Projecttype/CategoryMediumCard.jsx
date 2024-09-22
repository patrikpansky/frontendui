// field category
// targeting to ProjectCategory
// going from Projecttype
import { ProjectcategoryMediumCard } from "../Projectcategory/ProjectcategoryMediumCard";

export const ProjecttypeCategoryMediumCard = ({ projecttype , ...props}) => {
    return (
        <ProjectcategoryMediumCard projectcategory={ projecttype?.category } {...props} />
    )
}