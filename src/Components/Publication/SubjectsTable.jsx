// field subjects
// targeting to AcSubject
// going from Publication
import { AcsubjectsTable } from "../Acsubject/AcsubjectsTable";
import { AcsubjectLoadMoreButton } from "../Acsubject/AcsubjectLoadMoreButton";

export const PublicationSubjectsTableCard = ({ publication, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsubjectsTable acsubject={ publication?.subjects } {...props}>
            <AcsubjectLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcsubjectsTable>
    )
}