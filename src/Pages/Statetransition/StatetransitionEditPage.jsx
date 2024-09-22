import { useParams } from "react-router-dom"

import { StatetransitionLazy as Lazy } from "../../Components/Statetransition/StatetransitionLazy";
import { StatetransitionLargeCard as LargeCard } from "../../Components/Statetransition/StatetransitionLargeCard";
import { StatetransitionCardCapsule as CardCapsule } from "../../Components/Statetransition/StatetransitionCardCapsule";
import { StatetransitionEditCard as EditCard } from "../../Components/Statetransition/StatetransitionEditCard";

import { 
    StatetransitionPageQueryAction as QueryAction,
    StatetransitionPageQueryActionValidator as QueryActionValidator
} from "./StatetransitionPageQueryAction";


export const StatetransitionEditPageContentBase = ({ statetransition, children}) => {
    return (
        <LargeCard statetransition={ statetransition }>
            {/* other data */}
            <EditCard statetransition={ statetransition }/>
        </LargeCard>        
    );    
}

const StatetransitionLazyEditPageContent = Lazy(StatetransitionEditPageContentBase)(QueryAction, QueryActionValidator)

export const StatetransitionEditPage = () => {
    const params = useParams()
    return (<StatetransitionLazyEditPageContent {...params} />)

}
