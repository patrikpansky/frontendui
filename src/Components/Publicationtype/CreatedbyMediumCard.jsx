// field createdby
// targeting to User
// going from Publicationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const PublicationtypeCreatedbyMediumCard = ({ publicationtype , ...props}) => {
    return (
        <UserMediumCard user={ publicationtype?.createdby } {...props} />
    )
}