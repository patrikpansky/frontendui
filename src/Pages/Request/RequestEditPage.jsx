import { useParams } from "react-router-dom"

import { RequestLazy as Lazy } from "../../Components/Request/RequestLazy";
import { RequestLargeCard as LargeCard } from "../../Components/Request/RequestLargeCard";
import { RequestCardCapsule as CardCapsule } from "../../Components/Request/RequestCardCapsule";
import { RequestEditCard as EditCard } from "../../Components/Request/RequestEditCard";

import { 
    RequestPageQueryAction as QueryAction,
    RequestPageQueryActionValidator as QueryActionValidator
} from "./RequestPageQueryAction";

import { RequesthistorysTable as HistoriesTable9 } from '../../Components/Requesthistory/RequesthistorysTable';

export const RequestEditPageContentBase = ({ request, children}) => {
    return (
        <LargeCard request={ request }>
            {/* other data */}
            <EditCard request={ request }/>
        </LargeCard>        
    );    
}

const RequestLazyEditPageContent = Lazy(RequestEditPageContentBase)(QueryAction, QueryActionValidator)

export const RequestEditPage = () => {
    const params = useParams()
    return (<RequestLazyEditPageContent {...params} />)

}
