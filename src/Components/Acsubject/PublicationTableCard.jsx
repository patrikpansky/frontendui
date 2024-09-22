// field publication
// targeting to Publication
// going from Acsubject
import { AcsubjectCardCapsule } from "./AcsubjectCardCapsule";
import { PublicationsTable } from "../Publication/PublicationsTable";
export const AcsubjectPublicationTableCard = ({ acsubject , ...props}) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } >
            <PublicationsTable publications={ acsubject?.publication } {...props}>
            </PublicationsTable>
        </AcsubjectCardCapsule>
    )
}