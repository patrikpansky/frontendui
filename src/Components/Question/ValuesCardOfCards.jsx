// field values
// targeting to QuestionValue
// going from Question
import { QuestionCardCapsule } from "./QuestionCardCapsule";
import { QuestionvaluesCards } from "../Questionvalue/QuestionvaluesCards";
import { QuestionValuesLoadMoreButton as LoadMoreButton} from "../Question/ValuesLoadMoreButton";

export const QuestionValuesCardOfCards = ({ question, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <QuestionCardCapsule question={ question } label={"Values"}>
            <QuestionvaluesCards questionvalues={ question?.values } {...props} >
                <LoadMoreButton question={ question } skip={skip} limit={limit} orderby={orderby} where={where} />
            </QuestionvaluesCards>
        </QuestionCardCapsule>
    )
}