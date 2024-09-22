// field masterfacility
// targeting to Facility
// going from Facility
import { FacilityMediumCard } from "../Facility/FacilityMediumCard";

export const FacilityMasterfacilityMediumCard = ({ facility , ...props}) => {
    return (
        <FacilityMediumCard facility={ facility?.masterfacility } {...props} />
    )
}