// field type
// targeting to FacilityType
// going from Facility
import { FacilitytypeMediumCard } from "../Facilitytype/FacilitytypeMediumCard";

export const FacilityTypeMediumCard = ({ facility , ...props}) => {
    return (
        <FacilitytypeMediumCard facilitytype={ facility?.type } {...props} />
    )
}