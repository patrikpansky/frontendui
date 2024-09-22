// field sources
// targeting to StateTransition
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { StatetransitionsCards } from "../Statetransition/StatetransitionsCards";
import { StateSourcesLoadMoreButton as LoadMoreButton} from "../State/SourcesLoadMoreButton";

export const StateSourcesCardOfCards = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StateCardCapsule state={ state } label={"Sources"}>
            <StatetransitionsCards statetransitions={ state?.sources } {...props} >
                <LoadMoreButton state={ state } skip={skip} limit={limit} orderby={orderby} where={where} />
            </StatetransitionsCards>
        </StateCardCapsule>
    )
}