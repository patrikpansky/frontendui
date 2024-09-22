import { useParams } from "react-router-dom"

import { FinancetypeLargeCard as LargeCard } from "../../Components/Financetype/FinancetypeLargeCard";
import { FinancetypeCardCapsule as CardCapsule } from "../../Components/Financetype/FinancetypeCardCapsule";
import { 
    FinancetypeLazy as Lazy,
} from "../../Components/Financetype/FinancetypeLazy";

import { 
    FinancetypePageQueryAction as QueryAction,
    FinancetypePageQueryActionValidator as QueryActionValidator
} from "./FinancetypePageQueryAction";

// import { FinancesCards as FinancessCards9 } from '../../Components/Finance/FinancesCards';
import { FinancetypeFinancesCardOfCards as FinancesCards9 } from '../../Components/Financetype/FinancesCardOfCards';

export const FinancetypeFinancesPageContent = ({ financetype }) => {
    return (
        <LargeCard financetype={ financetype }>
            {/* other data */}
            { financetype?.finances?
                <FinancesCards9 financetype={ financetype }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FinancetypeFinancesLazyPageContent = Lazy(FinancetypeFinancesPageContent)(QueryAction, QueryActionValidator)
export const FinancetypeFinancesCardPage = () => {
    const params = useParams()
    return (<FinancetypeFinancesLazyPageContent {...params} />)
}

