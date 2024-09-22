// field type
// targeting to QuestionType
// going from Question
import { QuestiontypeMediumCard } from "../Questiontype/QuestiontypeMediumCard";

export const QuestionTypeMediumCard = ({ question , ...props}) => {
    return (
        <QuestiontypeMediumCard questiontype={ question?.type } {...props} />
    )
}