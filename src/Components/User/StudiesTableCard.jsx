// field studies
// targeting to AcProgramStudent
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AcprogramstudentsTable } from "../Acprogramstudent/AcprogramstudentsTable";
export const UserStudiesTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <AcprogramstudentsTable acprogramstudents={ user?.studies } {...props}>
            </AcprogramstudentsTable>
        </UserCardCapsule>
    )
}