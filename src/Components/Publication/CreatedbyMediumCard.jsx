// field createdby
// targeting to User
// going from Publication
import { UserMediumCard } from "../User/UserMediumCard";

export const PublicationCreatedbyMediumCard = ({ publication , ...props}) => {
    return (
        <UserMediumCard user={ publication?.createdby } {...props} />
    )
}