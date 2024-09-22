// field authors
// targeting to PublicationAuthor
// going from Publication
import { PublicationCardCapsule } from "./PublicationCardCapsule";
import { PublicationauthorsCards } from "../Publicationauthor/PublicationauthorsCards";
import { PublicationAuthorsLoadMoreButton as LoadMoreButton} from "../Publication/AuthorsLoadMoreButton";

export const PublicationAuthorsCardOfCards = ({ publication, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationCardCapsule publication={ publication } label={"Authors"}>
            <PublicationauthorsCards publicationauthors={ publication?.authors } {...props} >
                <LoadMoreButton publication={ publication } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PublicationauthorsCards>
        </PublicationCardCapsule>
    )
}