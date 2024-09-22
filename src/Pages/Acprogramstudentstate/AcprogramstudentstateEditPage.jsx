import { useParams } from "react-router-dom"

import { AcprogramstudentstateLazy as Lazy } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLazy";
import { AcprogramstudentstateLargeCard as LargeCard } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLargeCard";
import { AcprogramstudentstateCardCapsule as CardCapsule } from "../../Components/Acprogramstudentstate/AcprogramstudentstateCardCapsule";
import { AcprogramstudentstateEditCard as EditCard } from "../../Components/Acprogramstudentstate/AcprogramstudentstateEditCard";

import { 
    AcprogramstudentstatePageQueryAction as QueryAction,
    AcprogramstudentstatePageQueryActionValidator as QueryActionValidator
} from "./AcprogramstudentstatePageQueryAction";


export const AcprogramstudentstateEditPageContentBase = ({ acprogramstudentstate, children}) => {
    return (
        <LargeCard acprogramstudentstate={ acprogramstudentstate }>
            {/* other data */}
            <EditCard acprogramstudentstate={ acprogramstudentstate }/>
        </LargeCard>        
    );    
}

const AcprogramstudentstateLazyEditPageContent = Lazy(AcprogramstudentstateEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramstudentstateEditPage = () => {
    const params = useParams()
    return (<AcprogramstudentstateLazyEditPageContent {...params} />)

}
