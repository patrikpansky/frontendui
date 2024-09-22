// field topics
// targeting to AcTopic
// going from Acsemester
import { ActopicsTable } from "../Actopic/ActopicsTable";
import { ActopicLoadMoreButton } from "../Actopic/ActopicLoadMoreButton";

export const AcsemesterTopicsTableCard = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ActopicsTable actopic={ acsemester?.topics } {...props}>
            <ActopicLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ActopicsTable>
    )
}