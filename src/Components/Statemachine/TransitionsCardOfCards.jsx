// field transitions
// targeting to StateTransition
// going from Statemachine
import { StatemachineCardCapsule } from "./StatemachineCardCapsule";
import { StatetransitionsCards } from "../Statetransition/StatetransitionsCards";
import { StatemachineTransitionsLoadMoreButton as LoadMoreButton} from "../Statemachine/TransitionsLoadMoreButton";

export const StatemachineTransitionsCardOfCards = ({ statemachine, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } label={"Transitions"}>
            <StatetransitionsCards statetransitions={ statemachine?.transitions } {...props} >
                <LoadMoreButton statemachine={ statemachine } skip={skip} limit={limit} orderby={orderby} where={where} />
            </StatetransitionsCards>
        </StatemachineCardCapsule>
    )
}