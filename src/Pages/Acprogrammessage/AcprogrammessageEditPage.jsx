import { useParams } from "react-router-dom"

import { AcprogrammessageLazy as Lazy } from "../../Components/Acprogrammessage/AcprogrammessageLazy";
import { AcprogrammessageLargeCard as LargeCard } from "../../Components/Acprogrammessage/AcprogrammessageLargeCard";
import { AcprogrammessageCardCapsule as CardCapsule } from "../../Components/Acprogrammessage/AcprogrammessageCardCapsule";
import { AcprogrammessageEditCard as EditCard } from "../../Components/Acprogrammessage/AcprogrammessageEditCard";

import { 
    AcprogrammessagePageQueryAction as QueryAction,
    AcprogrammessagePageQueryActionValidator as QueryActionValidator
} from "./AcprogrammessagePageQueryAction";


export const AcprogrammessageEditPageContentBase = ({ acprogrammessage, children}) => {
    return (
        <LargeCard acprogrammessage={ acprogrammessage }>
            {/* other data */}
            <EditCard acprogrammessage={ acprogrammessage }/>
        </LargeCard>        
    );    
}

const AcprogrammessageLazyEditPageContent = Lazy(AcprogrammessageEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogrammessageEditPage = () => {
    const params = useParams()
    return (<AcprogrammessageLazyEditPageContent {...params} />)

}
