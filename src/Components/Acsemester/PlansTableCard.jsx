// field plans
// targeting to Plan
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { PlansTable } from "../Plan/PlansTable";
export const AcsemesterPlansTableCard = ({ acsemester , ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } >
            <PlansTable plans={ acsemester?.plans } {...props}>
            </PlansTable>
        </AcsemesterCardCapsule>
    )
}