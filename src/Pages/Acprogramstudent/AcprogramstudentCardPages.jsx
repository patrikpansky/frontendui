import { useParams } from "react-router-dom"

import { AcprogramstudentLargeCard as LargeCard } from "../../Components/Acprogramstudent/AcprogramstudentLargeCard";
import { AcprogramstudentCardCapsule as CardCapsule } from "../../Components/Acprogramstudent/AcprogramstudentCardCapsule";
import { 
    AcprogramstudentLazy as Lazy,
} from "../../Components/Acprogramstudent/AcprogramstudentLazy";

import { 
    AcprogramstudentPageQueryAction as QueryAction,
    AcprogramstudentPageQueryActionValidator as QueryActionValidator
} from "./AcprogramstudentPageQueryAction";

// import { AcprogrammessagesCards as MessagessCards7 } from '../../Components/Acprogrammessage/AcprogrammessagesCards';
import { AcprogramstudentMessagesCardOfCards as MessagesCards7 } from '../../Components/Acprogramstudent/MessagesCardOfCards';

export const AcprogramstudentMessagesPageContent = ({ acprogramstudent }) => {
    return (
        <LargeCard acprogramstudent={ acprogramstudent }>
            {/* other data */}
            { acprogramstudent?.messages?
                <MessagesCards7 acprogramstudent={ acprogramstudent }/>
                :null 
            }
        </LargeCard>        
    );    
}

const AcprogramstudentMessagesLazyPageContent = Lazy(AcprogramstudentMessagesPageContent)(QueryAction, QueryActionValidator)
export const AcprogramstudentMessagesCardPage = () => {
    const params = useParams()
    return (<AcprogramstudentMessagesLazyPageContent {...params} />)
}

