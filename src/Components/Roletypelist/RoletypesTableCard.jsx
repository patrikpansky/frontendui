// field roletypes
// targeting to RoleType
// going from Roletypelist
import { RoletypelistCardCapsule } from "./RoletypelistCardCapsule";
import { RoletypesTable } from "../Roletype/RoletypesTable";
export const RoletypelistRoletypesTableCard = ({ roletypelist , ...props}) => {
    return (
        <RoletypelistCardCapsule roletypelist={ roletypelist } >
            <RoletypesTable roletypes={ roletypelist?.roletypes } {...props}>
            </RoletypesTable>
        </RoletypelistCardCapsule>
    )
}