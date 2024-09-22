// field authors
// targeting to PublicationAuthor
// going from Publication
import { PublicationauthorsTable } from "../Publicationauthor/PublicationauthorsTable";
import { PublicationauthorLoadMoreButton } from "../Publicationauthor/PublicationauthorLoadMoreButton";

export const PublicationAuthorsTableCard = ({ publication, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationauthorsTable publicationauthor={ publication?.authors } {...props}>
            <PublicationauthorLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PublicationauthorsTable>
    )
}