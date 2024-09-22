import { useParams } from "react-router-dom"

import { AcprogramformtypeLazy as Lazy } from "../../Components/Acprogramformtype/AcprogramformtypeLazy";
import { AcprogramformtypeLargeCard as LargeCard } from "../../Components/Acprogramformtype/AcprogramformtypeLargeCard";
import { AcprogramformtypeCardCapsule as CardCapsule } from "../../Components/Acprogramformtype/AcprogramformtypeCardCapsule";

import { 
    AcprogramformtypePageQueryAction as QueryAction,
    AcprogramformtypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramformtypePageQueryAction";


export const AcprogramformtypePageContentBase = ({ acprogramformtype, children}) => {
    return (
        <LargeCard acprogramformtype={ acprogramformtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramformtypePageContent = ({ acprogramformtype }) => {

        return (
            <AcprogramformtypePageContentBase acprogramformtype={ acprogramformtype }>
                {/* other data */}
            </AcprogramformtypePageContentBase>        
        );    
}

const AcprogramformtypeLazyPageContent = Lazy(AcprogramformtypePageContent)(QueryAction, QueryActionValidator)

export const AcprogramformtypePage = () => {
    const params = useParams()
    return (<AcprogramformtypeLazyPageContent {...params} />)

}
