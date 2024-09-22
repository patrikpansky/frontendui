import { useParams } from "react-router-dom"

import { RequesthistoryLazy as Lazy } from "../../Components/Requesthistory/RequesthistoryLazy";
import { RequesthistoryLargeCard as LargeCard } from "../../Components/Requesthistory/RequesthistoryLargeCard";
import { RequesthistoryCardCapsule as CardCapsule } from "../../Components/Requesthistory/RequesthistoryCardCapsule";
import { RequesthistoryEditCard as EditCard } from "../../Components/Requesthistory/RequesthistoryEditCard";

import { 
    FormhistoryPageQueryAction as QueryAction,
    FormhistoryPageQueryActionValidator as QueryActionValidator
} from "./FormhistoryPageQueryAction";


export const FormhistoryEditPageContentBase = ({ formhistory, children}) => {
    return (
        <LargeCard formhistory={ formhistory }>
            {/* other data */}
            <EditCard formhistory={ formhistory }/>
        </LargeCard>        
    );    
}

const FormhistoryLazyEditPageContent = Lazy(FormhistoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormhistoryEditPage = () => {
    const params = useParams()
    return (<FormhistoryLazyEditPageContent {...params} />)

}
