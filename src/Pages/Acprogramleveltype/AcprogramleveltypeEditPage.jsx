import { useParams } from "react-router-dom"

import { AcprogramleveltypeLazy as Lazy } from "../../Components/Acprogramleveltype/AcprogramleveltypeLazy";
import { AcprogramleveltypeLargeCard as LargeCard } from "../../Components/Acprogramleveltype/AcprogramleveltypeLargeCard";
import { AcprogramleveltypeCardCapsule as CardCapsule } from "../../Components/Acprogramleveltype/AcprogramleveltypeCardCapsule";
import { AcprogramleveltypeEditCard as EditCard } from "../../Components/Acprogramleveltype/AcprogramleveltypeEditCard";

import { 
    AcprogramleveltypePageQueryAction as QueryAction,
    AcprogramleveltypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramleveltypePageQueryAction";


export const AcprogramleveltypeEditPageContentBase = ({ acprogramleveltype, children}) => {
    return (
        <LargeCard acprogramleveltype={ acprogramleveltype }>
            {/* other data */}
            <EditCard acprogramleveltype={ acprogramleveltype }/>
        </LargeCard>        
    );    
}

const AcprogramleveltypeLazyEditPageContent = Lazy(AcprogramleveltypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramleveltypeEditPage = () => {
    const params = useParams()
    return (<AcprogramleveltypeLazyEditPageContent {...params} />)

}
