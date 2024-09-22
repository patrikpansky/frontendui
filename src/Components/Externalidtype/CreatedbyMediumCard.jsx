// field createdby
// targeting to User
// going from Externalidtype
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidtypeCreatedbyMediumCard = ({ externalidtype , ...props}) => {
    return (
        <UserMediumCard user={ externalidtype?.createdby } {...props} />
    )
}