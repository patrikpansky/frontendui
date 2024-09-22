// field facilities
// targeting to Facility
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { FacilitysCards } from "../Facility/FacilitysCards";
import { PlannedlessonFacilitiesLoadMoreButton as LoadMoreButton} from "../Plannedlesson/FacilitiesLoadMoreButton";

export const PlannedlessonFacilitiesCardOfCards = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={"Facilities"}>
            <FacilitysCards facilitys={ plannedlesson?.facilities } {...props} >
                <LoadMoreButton plannedlesson={ plannedlesson } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FacilitysCards>
        </PlannedlessonCardCapsule>
    )
}