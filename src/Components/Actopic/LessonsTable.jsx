// field lessons
// targeting to AcLesson
// going from Actopic
import { AclessonsTable } from "../Aclesson/AclessonsTable";
import { AclessonLoadMoreButton } from "../Aclesson/AclessonLoadMoreButton";

export const ActopicLessonsTableCard = ({ actopic, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AclessonsTable aclesson={ actopic?.lessons } {...props}>
            <AclessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AclessonsTable>
    )
}