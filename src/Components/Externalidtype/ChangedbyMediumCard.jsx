// field changedby
// targeting to User
// going from Externalidtype
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidtypeChangedbyMediumCard = ({ externalidtype , ...props}) => {
    return (
        <UserMediumCard user={ externalidtype?.changedby } {...props} />
    )
}