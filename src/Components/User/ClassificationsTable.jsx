// field classifications
// targeting to AcClassification
// going from User
import { AcclassificationsTable } from "../Acclassification/AcclassificationsTable";
import { AcclassificationLoadMoreButton } from "../Acclassification/AcclassificationLoadMoreButton";

export const UserClassificationsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcclassificationsTable acclassification={ user?.classifications } {...props}>
            <AcclassificationLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcclassificationsTable>
    )
}