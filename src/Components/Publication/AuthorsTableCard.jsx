// field authors
// targeting to PublicationAuthor
// going from Publication
import { PublicationCardCapsule } from "./PublicationCardCapsule";
import { PublicationauthorsTable } from "../Publicationauthor/PublicationauthorsTable";
export const PublicationAuthorsTableCard = ({ publication , ...props}) => {
    return (
        <PublicationCardCapsule publication={ publication } >
            <PublicationauthorsTable publicationauthors={ publication?.authors } {...props}>
            </PublicationauthorsTable>
        </PublicationCardCapsule>
    )
}