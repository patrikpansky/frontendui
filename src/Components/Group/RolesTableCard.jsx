// field roles
// targeting to Role
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { RolesTable } from "../Role/RolesTable";
export const GroupRolesTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <RolesTable roles={ group?.roles } {...props}>
            </RolesTable>
        </GroupCardCapsule>
    )
}