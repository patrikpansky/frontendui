// field type
// targeting to AcLessonType
// going from Aclesson
import { AclessontypeMediumCard } from "../Aclessontype/AclessontypeMediumCard";

export const AclessonTypeMediumCard = ({ aclesson , ...props}) => {
    return (
        <AclessontypeMediumCard aclessontype={ aclesson?.type } {...props} />
    )
}