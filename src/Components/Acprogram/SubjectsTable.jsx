// field subjects
// targeting to AcSubject
// going from Acprogram
import { AcsubjectsTable } from "../Acsubject/AcsubjectsTable";
import { AcsubjectLoadMoreButton } from "../Acsubject/AcsubjectLoadMoreButton";

export const AcprogramSubjectsTableCard = ({ acprogram, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsubjectsTable acsubject={ acprogram?.subjects } {...props}>
            <AcsubjectLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcsubjectsTable>
    )
}