import { useParams } from "react-router-dom"

import { AcprogramstudentLazy as Lazy } from "../../Components/Acprogramstudent/AcprogramstudentLazy";
import { AcprogramstudentLargeCard as LargeCard } from "../../Components/Acprogramstudent/AcprogramstudentLargeCard";
import { AcprogramstudentCardCapsule as CardCapsule } from "../../Components/Acprogramstudent/AcprogramstudentCardCapsule";

import { 
    AcprogramstudentPageQueryAction as QueryAction,
    AcprogramstudentPageQueryActionValidator as QueryActionValidator
} from "./AcprogramstudentPageQueryAction";

import { AcprogrammessagesTable as MessagesTable7 } from '../../Components/Acprogrammessage/AcprogrammessagesTable';

export const AcprogramstudentPageContentBase = ({ acprogramstudent, children}) => {
    return (
        <LargeCard acprogramstudent={ acprogramstudent }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramstudentPageContent = ({ acprogramstudent }) => {

        return (
            <AcprogramstudentPageContentBase acprogramstudent={ acprogramstudent }>
                {/* other data */}
                { acprogramstudent?.messages?
                    <CardCapsule acprogramstudent={ acprogramstudent } label={ "messages" }>
                        <MessagesTable7 acprogrammessages={ acprogramstudent?.messages || []}/>
                    </CardCapsule>:null
                }
            </AcprogramstudentPageContentBase>        
        );    
}

const AcprogramstudentLazyPageContent = Lazy(AcprogramstudentPageContent)(QueryAction, QueryActionValidator)

export const AcprogramstudentPage = () => {
    const params = useParams()
    return (<AcprogramstudentLazyPageContent {...params} />)

}
