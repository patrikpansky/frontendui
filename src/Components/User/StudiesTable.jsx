// field studies
// targeting to AcProgramStudent
// going from User
import { AcprogramstudentsTable } from "../Acprogramstudent/AcprogramstudentsTable";
import { AcprogramstudentLoadMoreButton } from "../Acprogramstudent/AcprogramstudentLoadMoreButton";

export const UserStudiesTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogramstudentsTable acprogramstudent={ user?.studies } {...props}>
            <AcprogramstudentLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcprogramstudentsTable>
    )
}