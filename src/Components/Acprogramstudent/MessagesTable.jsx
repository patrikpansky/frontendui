// field messages
// targeting to AcProgramMessage
// going from Acprogramstudent
import { AcprogrammessagesTable } from "../Acprogrammessage/AcprogrammessagesTable";
import { AcprogrammessageLoadMoreButton } from "../Acprogrammessage/AcprogrammessageLoadMoreButton";

export const AcprogramstudentMessagesTableCard = ({ acprogramstudent, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogrammessagesTable acprogrammessage={ acprogramstudent?.messages } {...props}>
            <AcprogrammessageLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AcprogrammessagesTable>
    )
}