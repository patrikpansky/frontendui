// field subjects
// targeting to AcSubject
// going from Publication
import { PublicationCardCapsule } from "./PublicationCardCapsule";
import { AcsubjectsTable } from "../Acsubject/AcsubjectsTable";
export const PublicationSubjectsTableCard = ({ publication , ...props}) => {
    return (
        <PublicationCardCapsule publication={ publication } >
            <AcsubjectsTable acsubjects={ publication?.subjects } {...props}>
            </AcsubjectsTable>
        </PublicationCardCapsule>
    )
}