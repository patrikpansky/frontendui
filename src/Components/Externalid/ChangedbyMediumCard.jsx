// field changedby
// targeting to User
// going from Externalid
import { UserMediumCard } from "../User/UserMediumCard";

export const ExternalidChangedbyMediumCard = ({ externalid , ...props}) => {
    return (
        <UserMediumCard user={ externalid?.changedby } {...props} />
    )
}