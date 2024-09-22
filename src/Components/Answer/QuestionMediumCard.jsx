// field question
// targeting to Question
// going from Answer
import { QuestionMediumCard } from "../Question/QuestionMediumCard";

export const AnswerQuestionMediumCard = ({ answer , ...props}) => {
    return (
        <QuestionMediumCard question={ answer?.question } {...props} />
    )
}