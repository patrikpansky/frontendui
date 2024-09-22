import { useParams } from "react-router-dom"

import { AcprogramtypeLazy as Lazy } from "../../Components/Acprogramtype/AcprogramtypeLazy";
import { AcprogramtypeLargeCard as LargeCard } from "../../Components/Acprogramtype/AcprogramtypeLargeCard";
import { AcprogramtypeCardCapsule as CardCapsule } from "../../Components/Acprogramtype/AcprogramtypeCardCapsule";
import { AcprogramtypeEditCard as EditCard } from "../../Components/Acprogramtype/AcprogramtypeEditCard";

import { 
    AcprogramtypePageQueryAction as QueryAction,
    AcprogramtypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramtypePageQueryAction";


export const AcprogramtypeEditPageContentBase = ({ acprogramtype, children}) => {
    return (
        <LargeCard acprogramtype={ acprogramtype }>
            {/* other data */}
            <EditCard acprogramtype={ acprogramtype }/>
        </LargeCard>        
    );    
}

const AcprogramtypeLazyEditPageContent = Lazy(AcprogramtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramtypeEditPage = () => {
    const params = useParams()
    return (<AcprogramtypeLazyEditPageContent {...params} />)

}
