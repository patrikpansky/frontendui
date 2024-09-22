// field authorpublications
// targeting to PublicationAuthor
// going from User
import { PublicationauthorsTable } from "../Publicationauthor/PublicationauthorsTable";
import { PublicationauthorLoadMoreButton } from "../Publicationauthor/PublicationauthorLoadMoreButton";

export const UserAuthorpublicationsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationauthorsTable publicationauthor={ user?.authorpublications } {...props}>
            <PublicationauthorLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PublicationauthorsTable>
    )
}