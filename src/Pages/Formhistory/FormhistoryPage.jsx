import { useParams } from "react-router-dom"

import { RequesthistoryLazy as Lazy } from "../../Components/Requesthistory/RequesthistoryLazy";
import { RequesthistoryLargeCard as LargeCard } from "../../Components/Requesthistory/RequesthistoryLargeCard";
import { RequesthistoryCardCapsule as CardCapsule } from "../../Components/Requesthistory/RequesthistoryCardCapsule";

import { 
    FormhistoryPageQueryAction as QueryAction,
    FormhistoryPageQueryActionValidator as QueryActionValidator
} from "./FormhistoryPageQueryAction";


export const FormhistoryPageContentBase = ({ formhistory, children}) => {
    return (
        <LargeCard formhistory={ formhistory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormhistoryPageContent = ({ formhistory }) => {

        return (
            <FormhistoryPageContentBase formhistory={ formhistory }>
                {/* other data */}
            </FormhistoryPageContentBase>        
        );    
}

const FormhistoryLazyPageContent = Lazy(FormhistoryPageContent)(QueryAction, QueryActionValidator)

export const FormhistoryPage = () => {
    const params = useParams()
    return (<FormhistoryLazyPageContent {...params} />)

}
