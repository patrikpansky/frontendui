import { useParams } from "react-router-dom"

import { AcprogramlanguagetypeLazy as Lazy } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLazy";
import { AcprogramlanguagetypeLargeCard as LargeCard } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLargeCard";
import { AcprogramlanguagetypeCardCapsule as CardCapsule } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeCardCapsule";

import { 
    AcprogramlanguagetypePageQueryAction as QueryAction,
    AcprogramlanguagetypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramlanguagetypePageQueryAction";


export const AcprogramlanguagetypePageContentBase = ({ acprogramlanguagetype, children}) => {
    return (
        <LargeCard acprogramlanguagetype={ acprogramlanguagetype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramlanguagetypePageContent = ({ acprogramlanguagetype }) => {

        return (
            <AcprogramlanguagetypePageContentBase acprogramlanguagetype={ acprogramlanguagetype }>
                {/* other data */}
            </AcprogramlanguagetypePageContentBase>        
        );    
}

const AcprogramlanguagetypeLazyPageContent = Lazy(AcprogramlanguagetypePageContent)(QueryAction, QueryActionValidator)

export const AcprogramlanguagetypePage = () => {
    const params = useParams()
    return (<AcprogramlanguagetypeLazyPageContent {...params} />)

}
