// field types
// targeting to GroupType
// going from Groupcategory
import { GroupcategoryCardCapsule } from "./GroupcategoryCardCapsule";
import { GrouptypesTable } from "../Grouptype/GrouptypesTable";
export const GroupcategoryTypesTableCard = ({ groupcategory , ...props}) => {
    return (
        <GroupcategoryCardCapsule groupcategory={ groupcategory } >
            <GrouptypesTable grouptypes={ groupcategory?.types } {...props}>
            </GrouptypesTable>
        </GroupcategoryCardCapsule>
    )
}