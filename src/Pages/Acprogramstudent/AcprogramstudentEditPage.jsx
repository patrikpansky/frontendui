import { useParams } from "react-router-dom"

import { AcprogramstudentLazy as Lazy } from "../../Components/Acprogramstudent/AcprogramstudentLazy";
import { AcprogramstudentLargeCard as LargeCard } from "../../Components/Acprogramstudent/AcprogramstudentLargeCard";
import { AcprogramstudentCardCapsule as CardCapsule } from "../../Components/Acprogramstudent/AcprogramstudentCardCapsule";
import { AcprogramstudentEditCard as EditCard } from "../../Components/Acprogramstudent/AcprogramstudentEditCard";

import { 
    AcprogramstudentPageQueryAction as QueryAction,
    AcprogramstudentPageQueryActionValidator as QueryActionValidator
} from "./AcprogramstudentPageQueryAction";

import { AcprogrammessagesTable as MessagesTable7 } from '../../Components/Acprogrammessage/AcprogrammessagesTable';

export const AcprogramstudentEditPageContentBase = ({ acprogramstudent, children}) => {
    return (
        <LargeCard acprogramstudent={ acprogramstudent }>
            {/* other data */}
            <EditCard acprogramstudent={ acprogramstudent }/>
        </LargeCard>        
    );    
}

const AcprogramstudentLazyEditPageContent = Lazy(AcprogramstudentEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramstudentEditPage = () => {
    const params = useParams()
    return (<AcprogramstudentLazyEditPageContent {...params} />)

}
