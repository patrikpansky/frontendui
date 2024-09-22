// field plannedlessons
// targeting to PlannedLesson
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { PlannedlessonsCards } from "../Plannedlesson/PlannedlessonsCards";
import { FacilityPlannedlessonsLoadMoreButton as LoadMoreButton} from "../Facility/PlannedlessonsLoadMoreButton";

export const FacilityPlannedlessonsCardOfCards = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } label={"Plannedlessons"}>
            <PlannedlessonsCards plannedlessons={ facility?.plannedlessons } {...props} >
                <LoadMoreButton facility={ facility } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlannedlessonsCards>
        </FacilityCardCapsule>
    )
}