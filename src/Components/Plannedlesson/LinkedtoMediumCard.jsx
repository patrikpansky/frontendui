// field linkedto
// targeting to PlannedLesson
// going from Plannedlesson
import { PlannedlessonMediumCard } from "../Plannedlesson/PlannedlessonMediumCard";

export const PlannedlessonLinkedtoMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <PlannedlessonMediumCard plannedlesson={ plannedlesson?.linkedto } {...props} />
    )
}