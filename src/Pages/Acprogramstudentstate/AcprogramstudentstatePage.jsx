import { useParams } from "react-router-dom"

import { AcprogramstudentstateLazy as Lazy } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLazy";
import { AcprogramstudentstateLargeCard as LargeCard } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLargeCard";
import { AcprogramstudentstateCardCapsule as CardCapsule } from "../../Components/Acprogramstudentstate/AcprogramstudentstateCardCapsule";

import { 
    AcprogramstudentstatePageQueryAction as QueryAction,
    AcprogramstudentstatePageQueryActionValidator as QueryActionValidator
} from "./AcprogramstudentstatePageQueryAction";


export const AcprogramstudentstatePageContentBase = ({ acprogramstudentstate, children}) => {
    return (
        <LargeCard acprogramstudentstate={ acprogramstudentstate }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramstudentstatePageContent = ({ acprogramstudentstate }) => {

        return (
            <AcprogramstudentstatePageContentBase acprogramstudentstate={ acprogramstudentstate }>
                {/* other data */}
            </AcprogramstudentstatePageContentBase>        
        );    
}

const AcprogramstudentstateLazyPageContent = Lazy(AcprogramstudentstatePageContent)(QueryAction, QueryActionValidator)

export const AcprogramstudentstatePage = () => {
    const params = useParams()
    return (<AcprogramstudentstateLazyPageContent {...params} />)

}
