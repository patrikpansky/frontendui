// field semesters
// targeting to AcSemester
// going from Acsubject
import { AcsubjectCardCapsule } from "./AcsubjectCardCapsule";
import { AcsemestersTable } from "../Acsemester/AcsemestersTable";
export const AcsubjectSemestersTableCard = ({ acsubject , ...props}) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } >
            <AcsemestersTable acsemesters={ acsubject?.semesters } {...props}>
            </AcsemestersTable>
        </AcsubjectCardCapsule>
    )
}