// field facilities
// targeting to Facility
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { FacilitysTable } from "../Facility/FacilitysTable";
export const PlannedlessonFacilitiesTableCard = ({ plannedlesson , ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } >
            <FacilitysTable facilitys={ plannedlesson?.facilities } {...props}>
            </FacilitysTable>
        </PlannedlessonCardCapsule>
    )
}