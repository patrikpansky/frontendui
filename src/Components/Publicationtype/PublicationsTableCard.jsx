// field publications
// targeting to Publication
// going from Publicationtype
import { PublicationtypeCardCapsule } from "./PublicationtypeCardCapsule";
import { PublicationsTable } from "../Publication/PublicationsTable";
export const PublicationtypePublicationsTableCard = ({ publicationtype , ...props}) => {
    return (
        <PublicationtypeCardCapsule publicationtype={ publicationtype } >
            <PublicationsTable publications={ publicationtype?.publications } {...props}>
            </PublicationsTable>
        </PublicationtypeCardCapsule>
    )
}