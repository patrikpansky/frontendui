// field topics
// targeting to AcTopic
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { ActopicsTable } from "../Actopic/ActopicsTable";
export const AcsemesterTopicsTableCard = ({ acsemester , ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } >
            <ActopicsTable actopics={ acsemester?.topics } {...props}>
            </ActopicsTable>
        </AcsemesterCardCapsule>
    )
}