// field targets
// targeting to StateTransition
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { StatetransitionsCards } from "../Statetransition/StatetransitionsCards";
import { StateTargetsLoadMoreButton as LoadMoreButton} from "../State/TargetsLoadMoreButton";

export const StateTargetsCardOfCards = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StateCardCapsule state={ state } label={"Targets"}>
            <StatetransitionsCards statetransitions={ state?.targets } {...props} >
                <LoadMoreButton state={ state } skip={skip} limit={limit} orderby={orderby} where={where} />
            </StatetransitionsCards>
        </StateCardCapsule>
    )
}