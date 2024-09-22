// field answers
// targeting to Answer
// going from Question
import { QuestionCardCapsule } from "./QuestionCardCapsule";
import { AnswersTable } from "../Answer/AnswersTable";
export const QuestionAnswersTableCard = ({ question , ...props}) => {
    return (
        <QuestionCardCapsule question={ question } >
            <AnswersTable answers={ question?.answers } {...props}>
            </AnswersTable>
        </QuestionCardCapsule>
    )
}