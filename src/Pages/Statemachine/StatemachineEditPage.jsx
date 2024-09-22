import { useParams } from "react-router-dom"

import { StatemachineLazy as Lazy } from "../../Components/Statemachine/StatemachineLazy";
import { StatemachineLargeCard as LargeCard } from "../../Components/Statemachine/StatemachineLargeCard";
import { StatemachineCardCapsule as CardCapsule } from "../../Components/Statemachine/StatemachineCardCapsule";
import { StatemachineEditCard as EditCard } from "../../Components/Statemachine/StatemachineEditCard";

import { 
    StatemachinePageQueryAction as QueryAction,
    StatemachinePageQueryActionValidator as QueryActionValidator
} from "./StatemachinePageQueryAction";

import { StatesTable as StatesTable8 } from '../../Components/State/StatesTable';
import { StatetransitionsTable as TransitionsTable9 } from '../../Components/Statetransition/StatetransitionsTable';

export const StatemachineEditPageContentBase = ({ statemachine, children}) => {
    return (
        <LargeCard statemachine={ statemachine }>
            {/* other data */}
            <EditCard statemachine={ statemachine }/>
        </LargeCard>        
    );    
}

const StatemachineLazyEditPageContent = Lazy(StatemachineEditPageContentBase)(QueryAction, QueryActionValidator)

export const StatemachineEditPage = () => {
    const params = useParams()
    return (<StatemachineLazyEditPageContent {...params} />)

}
