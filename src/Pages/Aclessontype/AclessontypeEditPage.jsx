import { useParams } from "react-router-dom"

import { AclessontypeLazy as Lazy } from "../../Components/Aclessontype/AclessontypeLazy";
import { AclessontypeLargeCard as LargeCard } from "../../Components/Aclessontype/AclessontypeLargeCard";
import { AclessontypeCardCapsule as CardCapsule } from "../../Components/Aclessontype/AclessontypeCardCapsule";
import { AclessontypeEditCard as EditCard } from "../../Components/Aclessontype/AclessontypeEditCard";

import { 
    AclessontypePageQueryAction as QueryAction,
    AclessontypePageQueryActionValidator as QueryActionValidator
} from "./AclessontypePageQueryAction";


export const AclessontypeEditPageContentBase = ({ aclessontype, children}) => {
    return (
        <LargeCard aclessontype={ aclessontype }>
            {/* other data */}
            <EditCard aclessontype={ aclessontype }/>
        </LargeCard>        
    );    
}

const AclessontypeLazyEditPageContent = Lazy(AclessontypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AclessontypeEditPage = () => {
    const params = useParams()
    return (<AclessontypeLazyEditPageContent {...params} />)

}
