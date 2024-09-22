import { useParams } from "react-router-dom"

import { FinanceLargeCard as LargeCard } from "../../Components/Finance/FinanceLargeCard";
import { FinanceCardCapsule as CardCapsule } from "../../Components/Finance/FinanceCardCapsule";
import { 
    FinanceLazy as Lazy,
} from "../../Components/Finance/FinanceLazy";

import { 
    FinancePageQueryAction as QueryAction,
    FinancePageQueryActionValidator as QueryActionValidator
} from "./FinancePageQueryAction";

// import { FinancetypesCards as FinancetypesCards10 } from '../../Components/Financetype/FinancetypesCards';
import { FinanceFinancetypeCardOfCards as FinancetypeCards10 } from '../../Components/Finance/FinancetypeCardOfCards';

export const FinanceFinancetypePageContent = ({ finance }) => {
    return (
        <LargeCard finance={ finance }>
            {/* other data */}
            { finance?.financeType?
                <FinancetypeCards10 finance={ finance }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FinanceFinancetypeLazyPageContent = Lazy(FinanceFinancetypePageContent)(QueryAction, QueryActionValidator)
export const FinanceFinancetypeCardPage = () => {
    const params = useParams()
    return (<FinanceFinancetypeLazyPageContent {...params} />)
}

