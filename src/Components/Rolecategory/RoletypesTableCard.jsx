// field roletypes
// targeting to RoleType
// going from Rolecategory
import { RolecategoryCardCapsule } from "./RolecategoryCardCapsule";
import { RoletypesTable } from "../Roletype/RoletypesTable";
export const RolecategoryRoletypesTableCard = ({ rolecategory , ...props}) => {
    return (
        <RolecategoryCardCapsule rolecategory={ rolecategory } >
            <RoletypesTable roletypes={ rolecategory?.roletypes } {...props}>
            </RoletypesTable>
        </RolecategoryCardCapsule>
    )
}