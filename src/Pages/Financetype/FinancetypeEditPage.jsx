import { useParams } from "react-router-dom"

import { FinancetypeLazy as Lazy } from "../../Components/Financetype/FinancetypeLazy";
import { FinancetypeLargeCard as LargeCard } from "../../Components/Financetype/FinancetypeLargeCard";
import { FinancetypeCardCapsule as CardCapsule } from "../../Components/Financetype/FinancetypeCardCapsule";
import { FinancetypeEditCard as EditCard } from "../../Components/Financetype/FinancetypeEditCard";

import { 
    FinancetypePageQueryAction as QueryAction,
    FinancetypePageQueryActionValidator as QueryActionValidator
} from "./FinancetypePageQueryAction";

import { FinancesTable as FinancesTable9 } from '../../Components/Finance/FinancesTable';

export const FinancetypeEditPageContentBase = ({ financetype, children}) => {
    return (
        <LargeCard financetype={ financetype }>
            {/* other data */}
            <EditCard financetype={ financetype }/>
        </LargeCard>        
    );    
}

const FinancetypeLazyEditPageContent = Lazy(FinancetypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const FinancetypeEditPage = () => {
    const params = useParams()
    return (<FinancetypeLazyEditPageContent {...params} />)

}
