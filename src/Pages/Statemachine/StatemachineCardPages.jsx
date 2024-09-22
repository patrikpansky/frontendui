import { useParams } from "react-router-dom"

import { StatemachineLargeCard as LargeCard } from "../../Components/Statemachine/StatemachineLargeCard";
import { StatemachineCardCapsule as CardCapsule } from "../../Components/Statemachine/StatemachineCardCapsule";
import { 
    StatemachineLazy as Lazy,
} from "../../Components/Statemachine/StatemachineLazy";

import { 
    StatemachinePageQueryAction as QueryAction,
    StatemachinePageQueryActionValidator as QueryActionValidator
} from "./StatemachinePageQueryAction";

// import { StatesCards as StatessCards8 } from '../../Components/State/StatesCards';
import { StatemachineStatesCardOfCards as StatesCards8 } from '../../Components/Statemachine/StatesCardOfCards';
// import { StatetransitionsCards as TransitionssCards9 } from '../../Components/Statetransition/StatetransitionsCards';
import { StatemachineTransitionsCardOfCards as TransitionsCards9 } from '../../Components/Statemachine/TransitionsCardOfCards';

export const StatemachineStatesPageContent = ({ statemachine }) => {
    return (
        <LargeCard statemachine={ statemachine }>
            {/* other data */}
            { statemachine?.states?
                <StatesCards8 statemachine={ statemachine }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const StatemachineTransitionsPageContent = ({ statemachine }) => {
    return (
        <LargeCard statemachine={ statemachine }>
            {/* other data */}
            { statemachine?.transitions?
                <TransitionsCards9 statemachine={ statemachine }/>
                :null 
            }
        </LargeCard>        
    );    
}

const StatemachineStatesLazyPageContent = Lazy(StatemachineStatesPageContent)(QueryAction, QueryActionValidator)
export const StatemachineStatesCardPage = () => {
    const params = useParams()
    return (<StatemachineStatesLazyPageContent {...params} />)
}

const StatemachineTransitionsLazyPageContent = Lazy(StatemachineTransitionsPageContent)(QueryAction, QueryActionValidator)
export const StatemachineTransitionsCardPage = () => {
    const params = useParams()
    return (<StatemachineTransitionsLazyPageContent {...params} />)
}

