import { useParams } from "react-router-dom"

import { FinancecategoryLazy as Lazy } from "../../Components/Financecategory/FinancecategoryLazy";
import { FinancecategoryLargeCard as LargeCard } from "../../Components/Financecategory/FinancecategoryLargeCard";
import { FinancecategoryCardCapsule as CardCapsule } from "../../Components/Financecategory/FinancecategoryCardCapsule";

import { 
    FinancecategoryPageQueryAction as QueryAction,
    FinancecategoryPageQueryActionValidator as QueryActionValidator
} from "./FinancecategoryPageQueryAction";


export const FinancecategoryPageContentBase = ({ financecategory, children}) => {
    return (
        <LargeCard financecategory={ financecategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FinancecategoryPageContent = ({ financecategory }) => {

        return (
            <FinancecategoryPageContentBase financecategory={ financecategory }>
                {/* other data */}
            </FinancecategoryPageContentBase>        
        );    
}

const FinancecategoryLazyPageContent = Lazy(FinancecategoryPageContent)(QueryAction, QueryActionValidator)

export const FinancecategoryPage = () => {
    const params = useParams()
    return (<FinancecategoryLazyPageContent {...params} />)

}
