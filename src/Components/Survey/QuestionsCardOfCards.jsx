// field questions
// targeting to Question
// going from Survey
import { SurveyCardCapsule } from "./SurveyCardCapsule";
import { QuestionsCards } from "../Question/QuestionsCards";
import { SurveyQuestionsLoadMoreButton as LoadMoreButton} from "../Survey/QuestionsLoadMoreButton";

export const SurveyQuestionsCardOfCards = ({ survey, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <SurveyCardCapsule survey={ survey } label={"Questions"}>
            <QuestionsCards questions={ survey?.questions } {...props} >
                <LoadMoreButton survey={ survey } skip={skip} limit={limit} orderby={orderby} where={where} />
            </QuestionsCards>
        </SurveyCardCapsule>
    )
}