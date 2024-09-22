// field sources
// targeting to StateTransition
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { StatetransitionsTable } from "../Statetransition/StatetransitionsTable";
export const StateSourcesTableCard = ({ state , ...props}) => {
    return (
        <StateCardCapsule state={ state } >
            <StatetransitionsTable statetransitions={ state?.sources } {...props}>
            </StatetransitionsTable>
        </StateCardCapsule>
    )
}