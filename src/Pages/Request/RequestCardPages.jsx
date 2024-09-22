import { useParams } from "react-router-dom"

import { RequestLargeCard as LargeCard } from "../../Components/Request/RequestLargeCard";
import { RequestCardCapsule as CardCapsule } from "../../Components/Request/RequestCardCapsule";
import { 
    RequestLazy as Lazy,
} from "../../Components/Request/RequestLazy";

import { 
    RequestPageQueryAction as QueryAction,
    RequestPageQueryActionValidator as QueryActionValidator
} from "./RequestPageQueryAction";

// import { RequesthistorysCards as HistoriessCards9 } from '../../Components/Requesthistory/RequesthistorysCards';
import { RequestHistoriesCardOfCards as HistoriesCards9 } from '../../Components/Request/HistoriesCardOfCards';

export const RequestHistoriesPageContent = ({ request }) => {
    return (
        <LargeCard request={ request }>
            {/* other data */}
            { request?.histories?
                <HistoriesCards9 request={ request }/>
                :null 
            }
        </LargeCard>        
    );    
}

const RequestHistoriesLazyPageContent = Lazy(RequestHistoriesPageContent)(QueryAction, QueryActionValidator)
export const RequestHistoriesCardPage = () => {
    const params = useParams()
    return (<RequestHistoriesLazyPageContent {...params} />)
}

