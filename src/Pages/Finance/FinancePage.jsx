import { useParams } from "react-router-dom"

import { FinanceLazy as Lazy } from "../../Components/Finance/FinanceLazy";
import { FinanceLargeCard as LargeCard } from "../../Components/Finance/FinanceLargeCard";
import { FinanceCardCapsule as CardCapsule } from "../../Components/Finance/FinanceCardCapsule";

import { 
    FinancePageQueryAction as QueryAction,
    FinancePageQueryActionValidator as QueryActionValidator
} from "./FinancePageQueryAction";

import { FinancetypesTable as FinancetypeTable10 } from '../../Components/Financetype/FinancetypesTable';

export const FinancePageContentBase = ({ finance, children}) => {
    return (
        <LargeCard finance={ finance }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FinancePageContent = ({ finance }) => {

        return (
            <FinancePageContentBase finance={ finance }>
                {/* other data */}
                { finance?.financeType?
                    <CardCapsule finance={ finance } label={ "financeType" }>
                        <FinancetypeTable10 financetypes={ finance?.financeType || []}/>
                    </CardCapsule>:null
                }
            </FinancePageContentBase>        
        );    
}

const FinanceLazyPageContent = Lazy(FinancePageContent)(QueryAction, QueryActionValidator)

export const FinancePage = () => {
    const params = useParams()
    return (<FinanceLazyPageContent {...params} />)

}
