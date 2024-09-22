// field roletypes
// targeting to RoleType
// going from Roletypelist
import { RoletypesTable } from "../Roletype/RoletypesTable";
import { RoletypeLoadMoreButton } from "../Roletype/RoletypeLoadMoreButton";

export const RoletypelistRoletypesTableCard = ({ roletypelist, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RoletypesTable roletype={ roletypelist?.roletypes } {...props}>
            <RoletypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RoletypesTable>
    )
}