// field types
// targeting to GroupType
// going from Groupcategory
import { GroupcategoryCardCapsule } from "./GroupcategoryCardCapsule";
import { GrouptypesCards } from "../Grouptype/GrouptypesCards";
import { GroupcategoryTypesLoadMoreButton as LoadMoreButton} from "../Groupcategory/TypesLoadMoreButton";

export const GroupcategoryTypesCardOfCards = ({ groupcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupcategoryCardCapsule groupcategory={ groupcategory } label={"Types"}>
            <GrouptypesCards grouptypes={ groupcategory?.types } {...props} >
                <LoadMoreButton groupcategory={ groupcategory } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GrouptypesCards>
        </GroupcategoryCardCapsule>
    )
}