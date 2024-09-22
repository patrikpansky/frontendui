import { useParams } from "react-router-dom"

import { AcprogramtypeLazy as Lazy } from "../../Components/Acprogramtype/AcprogramtypeLazy";
import { AcprogramtypeLargeCard as LargeCard } from "../../Components/Acprogramtype/AcprogramtypeLargeCard";
import { AcprogramtypeCardCapsule as CardCapsule } from "../../Components/Acprogramtype/AcprogramtypeCardCapsule";

import { 
    AcprogramtypePageQueryAction as QueryAction,
    AcprogramtypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramtypePageQueryAction";


export const AcprogramtypePageContentBase = ({ acprogramtype, children}) => {
    return (
        <LargeCard acprogramtype={ acprogramtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramtypePageContent = ({ acprogramtype }) => {

        return (
            <AcprogramtypePageContentBase acprogramtype={ acprogramtype }>
                {/* other data */}
            </AcprogramtypePageContentBase>        
        );    
}

const AcprogramtypeLazyPageContent = Lazy(AcprogramtypePageContent)(QueryAction, QueryActionValidator)

export const AcprogramtypePage = () => {
    const params = useParams()
    return (<AcprogramtypeLazyPageContent {...params} />)

}
