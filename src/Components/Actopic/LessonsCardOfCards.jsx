// field lessons
// targeting to AcLesson
// going from Actopic
import { ActopicCardCapsule } from "./ActopicCardCapsule";
import { AclessonsCards } from "../Aclesson/AclessonsCards";
import { ActopicLessonsLoadMoreButton as LoadMoreButton} from "../Actopic/LessonsLoadMoreButton";

export const ActopicLessonsCardOfCards = ({ actopic, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ActopicCardCapsule actopic={ actopic } label={"Lessons"}>
            <AclessonsCards aclessons={ actopic?.lessons } {...props} >
                <LoadMoreButton actopic={ actopic } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AclessonsCards>
        </ActopicCardCapsule>
    )
}