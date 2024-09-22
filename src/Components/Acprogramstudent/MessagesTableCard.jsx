// field messages
// targeting to AcProgramMessage
// going from Acprogramstudent
import { AcprogramstudentCardCapsule } from "./AcprogramstudentCardCapsule";
import { AcprogrammessagesTable } from "../Acprogrammessage/AcprogrammessagesTable";
export const AcprogramstudentMessagesTableCard = ({ acprogramstudent , ...props}) => {
    return (
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent } >
            <AcprogrammessagesTable acprogrammessages={ acprogramstudent?.messages } {...props}>
            </AcprogrammessagesTable>
        </AcprogramstudentCardCapsule>
    )
}