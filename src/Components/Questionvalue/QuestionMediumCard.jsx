// field question
// targeting to Question
// going from Questionvalue
import { QuestionMediumCard } from "../Question/QuestionMediumCard";

export const QuestionvalueQuestionMediumCard = ({ questionvalue , ...props}) => {
    return (
        <QuestionMediumCard question={ questionvalue?.question } {...props} />
    )
}