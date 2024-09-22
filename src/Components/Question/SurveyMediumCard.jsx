// field survey
// targeting to Survey
// going from Question
import { SurveyMediumCard } from "../Survey/SurveyMediumCard";

export const QuestionSurveyMediumCard = ({ question , ...props}) => {
    return (
        <SurveyMediumCard survey={ question?.survey } {...props} />
    )
}