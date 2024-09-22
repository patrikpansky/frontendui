import { useParams } from "react-router-dom"

import { StatetransitionLazy as Lazy } from "../../Components/Statetransition/StatetransitionLazy";
import { StatetransitionLargeCard as LargeCard } from "../../Components/Statetransition/StatetransitionLargeCard";
import { StatetransitionCardCapsule as CardCapsule } from "../../Components/Statetransition/StatetransitionCardCapsule";

import { 
    StatetransitionPageQueryAction as QueryAction,
    StatetransitionPageQueryActionValidator as QueryActionValidator
} from "./StatetransitionPageQueryAction";


export const StatetransitionPageContentBase = ({ statetransition, children}) => {
    return (
        <LargeCard statetransition={ statetransition }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const StatetransitionPageContent = ({ statetransition }) => {

        return (
            <StatetransitionPageContentBase statetransition={ statetransition }>
                {/* other data */}
            </StatetransitionPageContentBase>        
        );    
}

const StatetransitionLazyPageContent = Lazy(StatetransitionPageContent)(QueryAction, QueryActionValidator)

export const StatetransitionPage = () => {
    const params = useParams()
    return (<StatetransitionLazyPageContent {...params} />)

}
