// field category
// targeting to FormCategory
// going from Formtype
import { FormcategoryMediumCard } from "../Formcategory/FormcategoryMediumCard";

export const FormtypeCategoryMediumCard = ({ formtype , ...props}) => {
    return (
        <FormcategoryMediumCard formcategory={ formtype?.category } {...props} />
    )
}