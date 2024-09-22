// field semesters
// targeting to AcSemester
// going from Acsubject
import { AcsemestersTable } from "../Acsemester/AcsemestersTable";
import { AcsemesterLoadMoreButton } from "../Acsemester/AcsemesterLoadMoreButton";

export const AcsubjectSemestersTableCard = ({ acsubject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsemestersTable acsemester={ acsubject?.semesters } {...props}>
            <AcsemesterLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcsemestersTable>
    )
}