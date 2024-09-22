import { useParams } from "react-router-dom"

import { AcprogramlanguagetypeLazy as Lazy } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLazy";
import { AcprogramlanguagetypeLargeCard as LargeCard } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLargeCard";
import { AcprogramlanguagetypeCardCapsule as CardCapsule } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeCardCapsule";
import { AcprogramlanguagetypeEditCard as EditCard } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeEditCard";

import { 
    AcprogramlanguagetypePageQueryAction as QueryAction,
    AcprogramlanguagetypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramlanguagetypePageQueryAction";


export const AcprogramlanguagetypeEditPageContentBase = ({ acprogramlanguagetype, children}) => {
    return (
        <LargeCard acprogramlanguagetype={ acprogramlanguagetype }>
            {/* other data */}
            <EditCard acprogramlanguagetype={ acprogramlanguagetype }/>
        </LargeCard>        
    );    
}

const AcprogramlanguagetypeLazyEditPageContent = Lazy(AcprogramlanguagetypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramlanguagetypeEditPage = () => {
    const params = useParams()
    return (<AcprogramlanguagetypeLazyEditPageContent {...params} />)

}
