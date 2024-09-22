// field roletypes
// targeting to RoleType
// going from Roletypelist
import { RoletypelistCardCapsule } from "./RoletypelistCardCapsule";
import { RoletypesCards } from "../Roletype/RoletypesCards";
import { RoletypelistRoletypesLoadMoreButton as LoadMoreButton} from "../Roletypelist/RoletypesLoadMoreButton";

export const RoletypelistRoletypesCardOfCards = ({ roletypelist, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RoletypelistCardCapsule roletypelist={ roletypelist } label={"Roletypes"}>
            <RoletypesCards roletypes={ roletypelist?.roletypes } {...props} >
                <LoadMoreButton roletypelist={ roletypelist } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RoletypesCards>
        </RoletypelistCardCapsule>
    )
}