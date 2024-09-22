import { useParams } from "react-router-dom"

import { StateLargeCard as LargeCard } from "../../Components/State/StateLargeCard";
import { StateCardCapsule as CardCapsule } from "../../Components/State/StateCardCapsule";
import { 
    StateLazy as Lazy,
} from "../../Components/State/StateLazy";

import { 
    StatePageQueryAction as QueryAction,
    StatePageQueryActionValidator as QueryActionValidator
} from "./StatePageQueryAction";

// import { RequestsCards as RequestssCards1 } from '../../Components/Request/RequestsCards';
import { StateRequestsCardOfCards as RequestsCards1 } from '../../Components/State/RequestsCardOfCards';
// import { StatetransitionsCards as SourcessCards11 } from '../../Components/Statetransition/StatetransitionsCards';
import { StateSourcesCardOfCards as SourcesCards11 } from '../../Components/State/SourcesCardOfCards';
// import { StatetransitionsCards as TargetssCards12 } from '../../Components/Statetransition/StatetransitionsCards';
import { StateTargetsCardOfCards as TargetsCards12 } from '../../Components/State/TargetsCardOfCards';
// import { RoletypesCards as RoletypessCards13 } from '../../Components/Roletype/RoletypesCards';
import { StateRoletypesCardOfCards as RoletypesCards13 } from '../../Components/State/RoletypesCardOfCards';

export const StateRequestsPageContent = ({ state }) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            { state?.requests?
                <RequestsCards1 state={ state }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const StateSourcesPageContent = ({ state }) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            { state?.sources?
                <SourcesCards11 state={ state }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const StateTargetsPageContent = ({ state }) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            { state?.targets?
                <TargetsCards12 state={ state }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const StateRoletypesPageContent = ({ state }) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            { state?.roletypes?
                <RoletypesCards13 state={ state }/>
                :null 
            }
        </LargeCard>        
    );    
}

const StateRequestsLazyPageContent = Lazy(StateRequestsPageContent)(QueryAction, QueryActionValidator)
export const StateRequestsCardPage = () => {
    const params = useParams()
    return (<StateRequestsLazyPageContent {...params} />)
}

const StateSourcesLazyPageContent = Lazy(StateSourcesPageContent)(QueryAction, QueryActionValidator)
export const StateSourcesCardPage = () => {
    const params = useParams()
    return (<StateSourcesLazyPageContent {...params} />)
}

const StateTargetsLazyPageContent = Lazy(StateTargetsPageContent)(QueryAction, QueryActionValidator)
export const StateTargetsCardPage = () => {
    const params = useParams()
    return (<StateTargetsLazyPageContent {...params} />)
}

const StateRoletypesLazyPageContent = Lazy(StateRoletypesPageContent)(QueryAction, QueryActionValidator)
export const StateRoletypesCardPage = () => {
    const params = useParams()
    return (<StateRoletypesLazyPageContent {...params} />)
}

