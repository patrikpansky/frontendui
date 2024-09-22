// field messages
// targeting to AcProgramMessage
// going from Acprogramstudent
import { AcprogramstudentCardCapsule } from "./AcprogramstudentCardCapsule";
import { AcprogrammessagesCards } from "../Acprogrammessage/AcprogrammessagesCards";
import { AcprogramstudentMessagesLoadMoreButton as LoadMoreButton} from "../Acprogramstudent/MessagesLoadMoreButton";

export const AcprogramstudentMessagesCardOfCards = ({ acprogramstudent, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent } label={"Messages"}>
            <AcprogrammessagesCards acprogrammessages={ acprogramstudent?.messages } {...props} >
                <LoadMoreButton acprogramstudent={ acprogramstudent } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcprogrammessagesCards>
        </AcprogramstudentCardCapsule>
    )
}