// field lessons
// targeting to AcLesson
// going from Actopic
import { ActopicCardCapsule } from "./ActopicCardCapsule";
import { AclessonsTable } from "../Aclesson/AclessonsTable";
export const ActopicLessonsTableCard = ({ actopic , ...props}) => {
    return (
        <ActopicCardCapsule actopic={ actopic } >
            <AclessonsTable aclessons={ actopic?.lessons } {...props}>
            </AclessonsTable>
        </ActopicCardCapsule>
    )
}