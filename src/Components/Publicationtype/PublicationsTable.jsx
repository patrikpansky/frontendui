// field publications
// targeting to Publication
// going from Publicationtype
import { PublicationsTable } from "../Publication/PublicationsTable";
import { PublicationLoadMoreButton } from "../Publication/PublicationLoadMoreButton";

export const PublicationtypePublicationsTableCard = ({ publicationtype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationsTable publication={ publicationtype?.publications } {...props}>
            <PublicationLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PublicationsTable>
    )
}