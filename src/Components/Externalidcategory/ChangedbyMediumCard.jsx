// field changedby
// targeting to User
// going from Externalidcategory
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidcategoryChangedbyMediumCard = ({ externalidcategory , ...props}) => {
    return (
        <UserMediumCard user={ externalidcategory?.changedby } {...props} />
    )
}