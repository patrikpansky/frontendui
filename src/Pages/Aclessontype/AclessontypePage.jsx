import { useParams } from "react-router-dom"

import { AclessontypeLazy as Lazy } from "../../Components/Aclessontype/AclessontypeLazy";
import { AclessontypeLargeCard as LargeCard } from "../../Components/Aclessontype/AclessontypeLargeCard";
import { AclessontypeCardCapsule as CardCapsule } from "../../Components/Aclessontype/AclessontypeCardCapsule";

import { 
    AclessontypePageQueryAction as QueryAction,
    AclessontypePageQueryActionValidator as QueryActionValidator
} from "./AclessontypePageQueryAction";


export const AclessontypePageContentBase = ({ aclessontype, children}) => {
    return (
        <LargeCard aclessontype={ aclessontype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AclessontypePageContent = ({ aclessontype }) => {

        return (
            <AclessontypePageContentBase aclessontype={ aclessontype }>
                {/* other data */}
            </AclessontypePageContentBase>        
        );    
}

const AclessontypeLazyPageContent = Lazy(AclessontypePageContent)(QueryAction, QueryActionValidator)

export const AclessontypePage = () => {
    const params = useParams()
    return (<AclessontypeLazyPageContent {...params} />)

}
