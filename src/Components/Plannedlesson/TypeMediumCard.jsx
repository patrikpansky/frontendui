// field type
// targeting to AcLessonType
// going from Plannedlesson
import { AclessontypeMediumCard } from "../Aclessontype/AclessontypeMediumCard";

export const PlannedlessonTypeMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <AclessontypeMediumCard aclessontype={ plannedlesson?.type } {...props} />
    )
}