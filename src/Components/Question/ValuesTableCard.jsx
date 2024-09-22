// field values
// targeting to QuestionValue
// going from Question
import { QuestionCardCapsule } from "./QuestionCardCapsule";
import { QuestionvaluesTable } from "../Questionvalue/QuestionvaluesTable";
export const QuestionValuesTableCard = ({ question , ...props}) => {
    return (
        <QuestionCardCapsule question={ question } >
            <QuestionvaluesTable questionvalues={ question?.values } {...props}>
            </QuestionvaluesTable>
        </QuestionCardCapsule>
    )
}