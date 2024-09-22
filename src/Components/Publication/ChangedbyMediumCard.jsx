// field changedby
// targeting to User
// going from Publication
import { UserMediumCard } from "../User/UserMediumCard";

export const PublicationChangedbyMediumCard = ({ publication , ...props}) => {
    return (
        <UserMediumCard user={ publication?.changedby } {...props} />
    )
}