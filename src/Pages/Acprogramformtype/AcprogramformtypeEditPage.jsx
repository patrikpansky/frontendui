import { useParams } from "react-router-dom"

import { AcprogramformtypeLazy as Lazy } from "../../Components/Acprogramformtype/AcprogramformtypeLazy";
import { AcprogramformtypeLargeCard as LargeCard } from "../../Components/Acprogramformtype/AcprogramformtypeLargeCard";
import { AcprogramformtypeCardCapsule as CardCapsule } from "../../Components/Acprogramformtype/AcprogramformtypeCardCapsule";
import { AcprogramformtypeEditCard as EditCard } from "../../Components/Acprogramformtype/AcprogramformtypeEditCard";

import { 
    AcprogramformtypePageQueryAction as QueryAction,
    AcprogramformtypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramformtypePageQueryAction";


export const AcprogramformtypeEditPageContentBase = ({ acprogramformtype, children}) => {
    return (
        <LargeCard acprogramformtype={ acprogramformtype }>
            {/* other data */}
            <EditCard acprogramformtype={ acprogramformtype }/>
        </LargeCard>        
    );    
}

const AcprogramformtypeLazyEditPageContent = Lazy(AcprogramformtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramformtypeEditPage = () => {
    const params = useParams()
    return (<AcprogramformtypeLazyEditPageContent {...params} />)

}
