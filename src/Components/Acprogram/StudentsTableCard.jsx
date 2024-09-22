// field students
// targeting to AcProgramStudent
// going from Acprogram
import { AcprogramCardCapsule } from "./AcprogramCardCapsule";
import { AcprogramstudentsTable } from "../Acprogramstudent/AcprogramstudentsTable";
export const AcprogramStudentsTableCard = ({ acprogram , ...props}) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } >
            <AcprogramstudentsTable acprogramstudents={ acprogram?.students } {...props}>
            </AcprogramstudentsTable>
        </AcprogramCardCapsule>
    )
}