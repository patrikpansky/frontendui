// field subfacilities
// targeting to Facility
// going from Facility
import { FacilitysTable } from "../Facility/FacilitysTable";
import { FacilityLoadMoreButton } from "../Facility/FacilityLoadMoreButton";

export const FacilitySubfacilitiesTableCard = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FacilitysTable facility={ facility?.subfacilities } {...props}>
            <FacilityLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FacilitysTable>
    )
}