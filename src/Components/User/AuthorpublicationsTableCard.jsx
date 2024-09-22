// field authorpublications
// targeting to PublicationAuthor
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PublicationauthorsTable } from "../Publicationauthor/PublicationauthorsTable";
export const UserAuthorpublicationsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <PublicationauthorsTable publicationauthors={ user?.authorpublications } {...props}>
            </PublicationauthorsTable>
        </UserCardCapsule>
    )
}