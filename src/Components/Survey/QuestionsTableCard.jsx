// field questions
// targeting to Question
// going from Survey
import { SurveyCardCapsule } from "./SurveyCardCapsule";
import { QuestionsTable } from "../Question/QuestionsTable";
export const SurveyQuestionsTableCard = ({ survey , ...props}) => {
    return (
        <SurveyCardCapsule survey={ survey } >
            <QuestionsTable questions={ survey?.questions } {...props}>
            </QuestionsTable>
        </SurveyCardCapsule>
    )
}