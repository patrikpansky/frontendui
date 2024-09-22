// field subfacilities
// targeting to Facility
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { FacilitysTable } from "../Facility/FacilitysTable";
export const FacilitySubfacilitiesTableCard = ({ facility , ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } >
            <FacilitysTable facilitys={ facility?.subfacilities } {...props}>
            </FacilitysTable>
        </FacilityCardCapsule>
    )
}