// field classifications
// targeting to AcClassification
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { AcclassificationsTable } from "../Acclassification/AcclassificationsTable";
export const AcsemesterClassificationsTableCard = ({ acsemester , ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } >
            <AcclassificationsTable acclassifications={ acsemester?.classifications } {...props}>
            </AcclassificationsTable>
        </AcsemesterCardCapsule>
    )
}