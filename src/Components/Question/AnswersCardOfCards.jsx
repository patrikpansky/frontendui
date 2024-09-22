// field answers
// targeting to Answer
// going from Question
import { QuestionCardCapsule } from "./QuestionCardCapsule";
import { AnswersCards } from "../Answer/AnswersCards";
import { QuestionAnswersLoadMoreButton as LoadMoreButton} from "../Question/AnswersLoadMoreButton";

export const QuestionAnswersCardOfCards = ({ question, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <QuestionCardCapsule question={ question } label={"Answers"}>
            <AnswersCards answers={ question?.answers } {...props} >
                <LoadMoreButton question={ question } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AnswersCards>
        </QuestionCardCapsule>
    )
}