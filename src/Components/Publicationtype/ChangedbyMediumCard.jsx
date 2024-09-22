// field changedby
// targeting to User
// going from Publicationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const PublicationtypeChangedbyMediumCard = ({ publicationtype , ...props}) => {
    return (
        <UserMediumCard user={ publicationtype?.changedby } {...props} />
    )
}