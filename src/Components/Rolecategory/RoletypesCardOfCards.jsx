// field roletypes
// targeting to RoleType
// going from Rolecategory
import { RolecategoryCardCapsule } from "./RolecategoryCardCapsule";
import { RoletypesCards } from "../Roletype/RoletypesCards";
import { RolecategoryRoletypesLoadMoreButton as LoadMoreButton} from "../Rolecategory/RoletypesLoadMoreButton";

export const RolecategoryRoletypesCardOfCards = ({ rolecategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RolecategoryCardCapsule rolecategory={ rolecategory } label={"Roletypes"}>
            <RoletypesCards roletypes={ rolecategory?.roletypes } {...props} >
                <LoadMoreButton rolecategory={ rolecategory } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RoletypesCards>
        </RolecategoryCardCapsule>
    )
}