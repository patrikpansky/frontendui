import { useParams } from "react-router-dom"

import { ExternalidtypeLazy as Lazy } from "../../Components/Externalidtype/ExternalidtypeLazy";
import { ExternalidtypeLargeCard as LargeCard } from "../../Components/Externalidtype/ExternalidtypeLargeCard";
import { ExternalidtypeCardCapsule as CardCapsule } from "../../Components/Externalidtype/ExternalidtypeCardCapsule";
import { ExternalidtypeEditCard as EditCard } from "../../Components/Externalidtype/ExternalidtypeEditCard";

import { 
    ExternalidtypePageQueryAction as QueryAction,
    ExternalidtypePageQueryActionValidator as QueryActionValidator
} from "./ExternalidtypePageQueryAction";


export const ExternalidtypeEditPageContentBase = ({ externalidtype, children}) => {
    return (
        <LargeCard externalidtype={ externalidtype }>
            {/* other data */}
            <EditCard externalidtype={ externalidtype }/>
        </LargeCard>        
    );    
}

const ExternalidtypeLazyEditPageContent = Lazy(ExternalidtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const ExternalidtypeEditPage = () => {
    const params = useParams()
    return (<ExternalidtypeLazyEditPageContent {...params} />)

}
