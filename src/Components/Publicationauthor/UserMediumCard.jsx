// field user
// targeting to User
// going from Publicationauthor
import { UserMediumCard } from "../User/UserMediumCard";

export const PublicationauthorUserMediumCard = ({ publicationauthor , ...props}) => {
    return (
        <UserMediumCard user={ publicationauthor?.user } {...props} />
    )
}