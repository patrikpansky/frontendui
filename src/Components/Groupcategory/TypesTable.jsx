// field types
// targeting to GroupType
// going from Groupcategory
import { GrouptypesTable } from "../Grouptype/GrouptypesTable";
import { GrouptypeLoadMoreButton } from "../Grouptype/GrouptypeLoadMoreButton";

export const GroupcategoryTypesTableCard = ({ groupcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GrouptypesTable grouptype={ groupcategory?.types } {...props}>
            <GrouptypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GrouptypesTable>
    )
}