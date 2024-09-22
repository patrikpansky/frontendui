// field subjects
// targeting to AcSubject
// going from Acprogram
import { AcprogramCardCapsule } from "./AcprogramCardCapsule";
import { AcsubjectsTable } from "../Acsubject/AcsubjectsTable";
export const AcprogramSubjectsTableCard = ({ acprogram , ...props}) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } >
            <AcsubjectsTable acsubjects={ acprogram?.subjects } {...props}>
            </AcsubjectsTable>
        </AcprogramCardCapsule>
    )
}