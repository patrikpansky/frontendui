// field eventstate
// targeting to FacilityEventStateType
// going from Facility
import { FacilityeventstatetypeMediumCard } from "../Facilityeventstatetype/FacilityeventstatetypeMediumCard";

export const FacilityEventstateMediumCard = ({ facility , ...props}) => {
    return (
        <FacilityeventstatetypeMediumCard facilityeventstatetype={ facility?.eventstate } {...props} />
    )
}