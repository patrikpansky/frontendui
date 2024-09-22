// field questions
// targeting to Question
// going from Survey
import { QuestionsTable } from "../Question/QuestionsTable";
import { QuestionLoadMoreButton } from "../Question/QuestionLoadMoreButton";

export const SurveyQuestionsTableCard = ({ survey, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <QuestionsTable question={ survey?.questions } {...props}>
            <QuestionLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </QuestionsTable>
    )
}