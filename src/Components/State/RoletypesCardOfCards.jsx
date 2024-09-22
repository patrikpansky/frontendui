// field roletypes
// targeting to RoleType
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { RoletypesCards } from "../Roletype/RoletypesCards";
import { StateRoletypesLoadMoreButton as LoadMoreButton} from "../State/RoletypesLoadMoreButton";

export const StateRoletypesCardOfCards = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <StateCardCapsule state={ state } label={"Roletypes"}>
            <RoletypesCards roletypes={ state?.roletypes } {...props} >
                <LoadMoreButton state={ state } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RoletypesCards>
        </StateCardCapsule>
    )
}