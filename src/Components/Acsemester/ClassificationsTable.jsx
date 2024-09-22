// field classifications
// targeting to AcClassification
// going from Acsemester
import { AcclassificationsTable } from "../Acclassification/AcclassificationsTable";
import { AcclassificationLoadMoreButton } from "../Acclassification/AcclassificationLoadMoreButton";

export const AcsemesterClassificationsTableCard = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcclassificationsTable acclassification={ acsemester?.classifications } {...props}>
            <AcclassificationLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcclassificationsTable>
    )
}