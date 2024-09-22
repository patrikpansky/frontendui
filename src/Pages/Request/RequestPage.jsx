import { useParams } from "react-router-dom"

import { RequestLazy as Lazy } from "../../Components/Request/RequestLazy";
import { RequestLargeCard as LargeCard } from "../../Components/Request/RequestLargeCard";
import { RequestCardCapsule as CardCapsule } from "../../Components/Request/RequestCardCapsule";

import { 
    RequestPageQueryAction as QueryAction,
    RequestPageQueryActionValidator as QueryActionValidator
} from "./RequestPageQueryAction";

import { RequesthistorysTable as HistoriesTable9 } from '../../Components/Requesthistory/RequesthistorysTable';

export const RequestPageContentBase = ({ request, children}) => {
    return (
        <LargeCard request={ request }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RequestPageContent = ({ request }) => {

        return (
            <RequestPageContentBase request={ request }>
                {/* other data */}
                { request?.histories?
                    <CardCapsule request={ request } label={ "histories" }>
                        <HistoriesTable9 requesthistorys={ request?.histories || []}/>
                    </CardCapsule>:null
                }
            </RequestPageContentBase>        
        );    
}

const RequestLazyPageContent = Lazy(RequestPageContent)(QueryAction, QueryActionValidator)

export const RequestPage = () => {
    const params = useParams()
    return (<RequestLazyPageContent {...params} />)

}
