import { useParams } from "react-router-dom"

import { ExternalidtypeLazy as Lazy } from "../../Components/Externalidtype/ExternalidtypeLazy";
import { ExternalidtypeLargeCard as LargeCard } from "../../Components/Externalidtype/ExternalidtypeLargeCard";
import { ExternalidtypeCardCapsule as CardCapsule } from "../../Components/Externalidtype/ExternalidtypeCardCapsule";

import { 
    ExternalidtypePageQueryAction as QueryAction,
    ExternalidtypePageQueryActionValidator as QueryActionValidator
} from "./ExternalidtypePageQueryAction";


export const ExternalidtypePageContentBase = ({ externalidtype, children}) => {
    return (
        <LargeCard externalidtype={ externalidtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const ExternalidtypePageContent = ({ externalidtype }) => {

        return (
            <ExternalidtypePageContentBase externalidtype={ externalidtype }>
                {/* other data */}
            </ExternalidtypePageContentBase>        
        );    
}

const ExternalidtypeLazyPageContent = Lazy(ExternalidtypePageContent)(QueryAction, QueryActionValidator)

export const ExternalidtypePage = () => {
    const params = useParams()
    return (<ExternalidtypeLazyPageContent {...params} />)

}
