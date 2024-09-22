// field category
// targeting to ExternalIdCategory
// going from Externalidtype
import { ExternalidcategoryMediumCard } from "../Externalidcategory/ExternalidcategoryMediumCard";

export const ExternalidtypeCategoryMediumCard = ({ externalidtype , ...props}) => {
    return (
        <ExternalidcategoryMediumCard externalidcategory={ externalidtype?.category } {...props} />
    )
}