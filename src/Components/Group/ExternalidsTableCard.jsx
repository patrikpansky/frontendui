// field externalids
// targeting to ExternalId
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
export const GroupExternalidsTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <ExternalidsTable externalids={ group?.externalids } {...props}>
            </ExternalidsTable>
        </GroupCardCapsule>
    )
}