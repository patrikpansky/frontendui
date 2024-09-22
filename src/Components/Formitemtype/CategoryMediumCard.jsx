// field category
// targeting to FormItemCategory
// going from Formitemtype
import { FormitemcategoryMediumCard } from "../Formitemcategory/FormitemcategoryMediumCard";

export const FormitemtypeCategoryMediumCard = ({ formitemtype , ...props}) => {
    return (
        <FormitemcategoryMediumCard formitemcategory={ formitemtype?.category } {...props} />
    )
}