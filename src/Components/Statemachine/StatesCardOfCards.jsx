// field states
// targeting to State
// going from Statemachine
import { StatemachineCardCapsule } from "./StatemachineCardCapsule";
import { StatesCards } from "../State/StatesCards";
import { StatemachineStatesLoadMoreButton as LoadMoreButton} from "../Statemachine/StatesLoadMoreButton";

export const StatemachineStatesCardOfCards = ({ statemachine, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } label={"States"}>
            <StatesCards states={ statemachine?.states } {...props} >
                <LoadMoreButton statemachine={ statemachine } skip={skip} limit={limit} orderby={orderby} where={where} />
            </StatesCards>
        </StatemachineCardCapsule>
    )
}