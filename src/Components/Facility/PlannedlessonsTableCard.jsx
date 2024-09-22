// field plannedlessons
// targeting to PlannedLesson
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
export const FacilityPlannedlessonsTableCard = ({ facility , ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } >
            <PlannedlessonsTable plannedlessons={ facility?.plannedlessons } {...props}>
            </PlannedlessonsTable>
        </FacilityCardCapsule>
    )
}