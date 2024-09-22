// field createdby
// targeting to User
// going from Externalid
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidCreatedbyMediumCard = ({ externalid , ...props}) => {
    return (
        <UserMediumCard user={ externalid?.createdby } {...props} />
    )
}