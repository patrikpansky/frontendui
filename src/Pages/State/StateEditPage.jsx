import { useParams } from "react-router-dom"

import { StateLazy as Lazy } from "../../Components/State/StateLazy";
import { StateLargeCard as LargeCard } from "../../Components/State/StateLargeCard";
import { StateCardCapsule as CardCapsule } from "../../Components/State/StateCardCapsule";
import { StateEditCard as EditCard } from "../../Components/State/StateEditCard";

import { 
    StatePageQueryAction as QueryAction,
    StatePageQueryActionValidator as QueryActionValidator
} from "./StatePageQueryAction";

import { RequestsTable as RequestsTable1 } from '../../Components/Request/RequestsTable';
import { StatetransitionsTable as SourcesTable11 } from '../../Components/Statetransition/StatetransitionsTable';
import { StatetransitionsTable as TargetsTable12 } from '../../Components/Statetransition/StatetransitionsTable';
import { RoletypesTable as RoletypesTable13 } from '../../Components/Roletype/RoletypesTable';

export const StateEditPageContentBase = ({ state, children}) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            <EditCard state={ state }/>
        </LargeCard>        
    );    
}

const StateLazyEditPageContent = Lazy(StateEditPageContentBase)(QueryAction, QueryActionValidator)

export const StateEditPage = () => {
    const params = useParams()
    return (<StateLazyEditPageContent {...params} />)

}
