// field students
// targeting to AcProgramStudent
// going from Acprogram
import { AcprogramstudentsTable } from "../Acprogramstudent/AcprogramstudentsTable";
import { AcprogramstudentLoadMoreButton } from "../Acprogramstudent/AcprogramstudentLoadMoreButton";

export const AcprogramStudentsTableCard = ({ acprogram, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogramstudentsTable acprogramstudent={ acprogram?.students } {...props}>
            <AcprogramstudentLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcprogramstudentsTable>
    )
}