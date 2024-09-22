// field roletypes
// targeting to RoleType
// going from Rolecategory
import { RoletypesTable } from "../Roletype/RoletypesTable";
import { RoletypeLoadMoreButton } from "../Roletype/RoletypeLoadMoreButton";

export const RolecategoryRoletypesTableCard = ({ rolecategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RoletypesTable roletype={ rolecategory?.roletypes } {...props}>
            <RoletypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RoletypesTable>
    )
}