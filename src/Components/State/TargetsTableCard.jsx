// field targets
// targeting to StateTransition
// going from State
import { StateCardCapsule } from "./StateCardCapsule";
import { StatetransitionsTable } from "../Statetransition/StatetransitionsTable";
export const StateTargetsTableCard = ({ state , ...props}) => {
    return (
        <StateCardCapsule state={ state } >
            <StatetransitionsTable statetransitions={ state?.targets } {...props}>
            </StatetransitionsTable>
        </StateCardCapsule>
    )
}