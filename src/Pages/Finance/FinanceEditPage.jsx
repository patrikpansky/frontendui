import { useParams } from "react-router-dom"

import { FinanceLazy as Lazy } from "../../Components/Finance/FinanceLazy";
import { FinanceLargeCard as LargeCard } from "../../Components/Finance/FinanceLargeCard";
import { FinanceCardCapsule as CardCapsule } from "../../Components/Finance/FinanceCardCapsule";
import { FinanceEditCard as EditCard } from "../../Components/Finance/FinanceEditCard";

import { 
    FinancePageQueryAction as QueryAction,
    FinancePageQueryActionValidator as QueryActionValidator
} from "./FinancePageQueryAction";

import { FinancetypesTable as FinancetypeTable10 } from '../../Components/Financetype/FinancetypesTable';

export const FinanceEditPageContentBase = ({ finance, children}) => {
    return (
        <LargeCard finance={ finance }>
            {/* other data */}
            <EditCard finance={ finance }/>
        </LargeCard>        
    );    
}

const FinanceLazyEditPageContent = Lazy(FinanceEditPageContentBase)(QueryAction, QueryActionValidator)

export const FinanceEditPage = () => {
    const params = useParams()
    return (<FinanceLazyEditPageContent {...params} />)

}
