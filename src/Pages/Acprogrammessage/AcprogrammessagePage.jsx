import { useParams } from "react-router-dom"

import { AcprogrammessageLazy as Lazy } from "../../Components/Acprogrammessage/AcprogrammessageLazy";
import { AcprogrammessageLargeCard as LargeCard } from "../../Components/Acprogrammessage/AcprogrammessageLargeCard";
import { AcprogrammessageCardCapsule as CardCapsule } from "../../Components/Acprogrammessage/AcprogrammessageCardCapsule";

import { 
    AcprogrammessagePageQueryAction as QueryAction,
    AcprogrammessagePageQueryActionValidator as QueryActionValidator
} from "./AcprogrammessagePageQueryAction";


export const AcprogrammessagePageContentBase = ({ acprogrammessage, children}) => {
    return (
        <LargeCard acprogrammessage={ acprogrammessage }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogrammessagePageContent = ({ acprogrammessage }) => {

        return (
            <AcprogrammessagePageContentBase acprogrammessage={ acprogrammessage }>
                {/* other data */}
            </AcprogrammessagePageContentBase>        
        );    
}

const AcprogrammessageLazyPageContent = Lazy(AcprogrammessagePageContent)(QueryAction, QueryActionValidator)

export const AcprogrammessagePage = () => {
    const params = useParams()
    return (<AcprogrammessageLazyPageContent {...params} />)

}
