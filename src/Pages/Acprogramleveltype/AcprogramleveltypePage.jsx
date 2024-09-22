import { useParams } from "react-router-dom"

import { AcprogramleveltypeLazy as Lazy } from "../../Components/Acprogramleveltype/AcprogramleveltypeLazy";
import { AcprogramleveltypeLargeCard as LargeCard } from "../../Components/Acprogramleveltype/AcprogramleveltypeLargeCard";
import { AcprogramleveltypeCardCapsule as CardCapsule } from "../../Components/Acprogramleveltype/AcprogramleveltypeCardCapsule";

import { 
    AcprogramleveltypePageQueryAction as QueryAction,
    AcprogramleveltypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramleveltypePageQueryAction";


export const AcprogramleveltypePageContentBase = ({ acprogramleveltype, children}) => {
    return (
        <LargeCard acprogramleveltype={ acprogramleveltype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramleveltypePageContent = ({ acprogramleveltype }) => {

        return (
            <AcprogramleveltypePageContentBase acprogramleveltype={ acprogramleveltype }>
                {/* other data */}
            </AcprogramleveltypePageContentBase>        
        );    
}

const AcprogramleveltypeLazyPageContent = Lazy(AcprogramleveltypePageContent)(QueryAction, QueryActionValidator)

export const AcprogramleveltypePage = () => {
    const params = useParams()
    return (<AcprogramleveltypeLazyPageContent {...params} />)

}
