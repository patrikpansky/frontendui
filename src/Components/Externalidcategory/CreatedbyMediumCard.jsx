// field createdby
// targeting to User
// going from Externalidcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidcategoryCreatedbyMediumCard = ({ externalidcategory , ...props}) => {
    return (
        <UserMediumCard user={ externalidcategory?.createdby } {...props} />
    )
}