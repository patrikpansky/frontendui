// field publication
// targeting to Publication
// going from Acsubject
import { PublicationsTable } from "../Publication/PublicationsTable";
import { PublicationLoadMoreButton } from "../Publication/PublicationLoadMoreButton";

export const AcsubjectPublicationTableCard = ({ acsubject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationsTable publication={ acsubject?.publication } {...props}>
            <PublicationLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PublicationsTable>
    )
}