// field subfacilities
// targeting to Facility
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { FacilitysCards } from "../Facility/FacilitysCards";
import { FacilitySubfacilitiesLoadMoreButton as LoadMoreButton} from "../Facility/SubfacilitiesLoadMoreButton";

export const FacilitySubfacilitiesCardOfCards = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } label={"Subfacilities"}>
            <FacilitysCards facilitys={ facility?.subfacilities } {...props} >
                <LoadMoreButton facility={ facility } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FacilitysCards>
        </FacilityCardCapsule>
    )
}