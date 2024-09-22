// field values
// targeting to QuestionValue
// going from Question
import { QuestionvaluesTable } from "../Questionvalue/QuestionvaluesTable";
import { QuestionvalueLoadMoreButton } from "../Questionvalue/QuestionvalueLoadMoreButton";

export const QuestionValuesTableCard = ({ question, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <QuestionvaluesTable questionvalue={ question?.values } {...props}>
            <QuestionvalueLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </QuestionvaluesTable>
    )
}