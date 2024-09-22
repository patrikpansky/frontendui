import { useParams } from "react-router-dom"

import { FinancetypeLazy as Lazy } from "../../Components/Financetype/FinancetypeLazy";
import { FinancetypeLargeCard as LargeCard } from "../../Components/Financetype/FinancetypeLargeCard";
import { FinancetypeCardCapsule as CardCapsule } from "../../Components/Financetype/FinancetypeCardCapsule";

import { 
    FinancetypePageQueryAction as QueryAction,
    FinancetypePageQueryActionValidator as QueryActionValidator
} from "./FinancetypePageQueryAction";

import { FinancesTable as FinancesTable9 } from '../../Components/Finance/FinancesTable';

export const FinancetypePageContentBase = ({ financetype, children}) => {
    return (
        <LargeCard financetype={ financetype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FinancetypePageContent = ({ financetype }) => {

        return (
            <FinancetypePageContentBase financetype={ financetype }>
                {/* other data */}
                { financetype?.finances?
                    <CardCapsule financetype={ financetype } label={ "finances" }>
                        <FinancesTable9 finances={ financetype?.finances || []}/>
                    </CardCapsule>:null
                }
            </FinancetypePageContentBase>        
        );    
}

const FinancetypeLazyPageContent = Lazy(FinancetypePageContent)(QueryAction, QueryActionValidator)

export const FinancetypePage = () => {
    const params = useParams()
    return (<FinancetypeLazyPageContent {...params} />)

}
