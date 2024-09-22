import { useParams } from "react-router-dom"

import { FinancecategoryLazy as Lazy } from "../../Components/Financecategory/FinancecategoryLazy";
import { FinancecategoryLargeCard as LargeCard } from "../../Components/Financecategory/FinancecategoryLargeCard";
import { FinancecategoryCardCapsule as CardCapsule } from "../../Components/Financecategory/FinancecategoryCardCapsule";
import { FinancecategoryEditCard as EditCard } from "../../Components/Financecategory/FinancecategoryEditCard";

import { 
    FinancecategoryPageQueryAction as QueryAction,
    FinancecategoryPageQueryActionValidator as QueryActionValidator
} from "./FinancecategoryPageQueryAction";


export const FinancecategoryEditPageContentBase = ({ financecategory, children}) => {
    return (
        <LargeCard financecategory={ financecategory }>
            {/* other data */}
            <EditCard financecategory={ financecategory }/>
        </LargeCard>        
    );    
}

const FinancecategoryLazyEditPageContent = Lazy(FinancecategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const FinancecategoryEditPage = () => {
    const params = useParams()
    return (<FinancecategoryLazyEditPageContent {...params} />)

}
