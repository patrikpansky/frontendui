// field roletypes
// targeting to RoleType
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { RoletypesTable } from "../Roletype/RoletypesTable";
export const StateRoletypesTableCard = ({ state , ...props}) => {
    return (
        <StateCardCapsule state={ state } >
            <RoletypesTable roletypes={ state?.roletypes } {...props}>
            </RoletypesTable>
        </StateCardCapsule>
    )
}