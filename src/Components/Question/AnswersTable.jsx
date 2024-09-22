// field answers
// targeting to Answer
// going from Question
import { AnswersTable } from "../Answer/AnswersTable";
import { AnswerLoadMoreButton } from "../Answer/AnswerLoadMoreButton";

export const QuestionAnswersTableCard = ({ question, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AnswersTable answer={ question?.answers } {...props}>
            <AnswerLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AnswersTable>
    )
}