// field roletypes
// targeting to RoleType
// going from State
import { RoletypesTable } from "../Roletype/RoletypesTable";
import { RoletypeLoadMoreButton } from "../Roletype/RoletypeLoadMoreButton";

export const StateRoletypesTableCard = ({ state, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <RoletypesTable roletype={ state?.roletypes } {...props}>
            <RoletypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </RoletypesTable>
    )
}