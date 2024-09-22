// field facilities
// targeting to Facility
// going from Plannedlesson
import { FacilitysTable } from "../Facility/FacilitysTable";
import { FacilityLoadMoreButton } from "../Facility/FacilityLoadMoreButton";

export const PlannedlessonFacilitiesTableCard = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FacilitysTable facility={ plannedlesson?.facilities } {...props}>
            <FacilityLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FacilitysTable>
    )
}