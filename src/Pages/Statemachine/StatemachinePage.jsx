import { useParams } from "react-router-dom"

import { StatemachineLazy as Lazy } from "../../Components/Statemachine/StatemachineLazy";
import { StatemachineLargeCard as LargeCard } from "../../Components/Statemachine/StatemachineLargeCard";
import { StatemachineCardCapsule as CardCapsule } from "../../Components/Statemachine/StatemachineCardCapsule";

import { 
    StatemachinePageQueryAction as QueryAction,
    StatemachinePageQueryActionValidator as QueryActionValidator
} from "./StatemachinePageQueryAction";

import { StatesTable as StatesTable8 } from '../../Components/State/StatesTable';
import { StatetransitionsTable as TransitionsTable9 } from '../../Components/Statetransition/StatetransitionsTable';

export const StatemachinePageContentBase = ({ statemachine, children}) => {
    return (
        <LargeCard statemachine={ statemachine }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const StatemachinePageContent = ({ statemachine }) => {

        return (
            <StatemachinePageContentBase statemachine={ statemachine }>
                {/* other data */}
                { statemachine?.states?
                    <CardCapsule statemachine={ statemachine } label={ "states" }>
                        <StatesTable8 states={ statemachine?.states || []}/>
                    </CardCapsule>:null
                }
                { statemachine?.transitions?
                    <CardCapsule statemachine={ statemachine } label={ "transitions" }>
                        <TransitionsTable9 statetransitions={ statemachine?.transitions || []}/>
                    </CardCapsule>:null
                }
            </StatemachinePageContentBase>        
        );    
}

const StatemachineLazyPageContent = Lazy(StatemachinePageContent)(QueryAction, QueryActionValidator)

export const StatemachinePage = () => {
    const params = useParams()
    return (<StatemachineLazyPageContent {...params} />)

}
