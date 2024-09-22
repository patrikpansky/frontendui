// field plan
// targeting to Plan
// going from Plannedlesson
import { PlanMediumCard } from "../Plan/PlanMediumCard";

export const PlannedlessonPlanMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <PlanMediumCard plan={ plannedlesson?.plan } {...props} />
    )
}