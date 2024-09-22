import { useParams } from "react-router-dom"

import { SurveyLargeCard as LargeCard } from "../../Components/Survey/SurveyLargeCard";
import { SurveyCardCapsule as CardCapsule } from "../../Components/Survey/SurveyCardCapsule";
import { 
    SurveyLazy as Lazy,
} from "../../Components/Survey/SurveyLazy";

import { 
    SurveyPageQueryAction as QueryAction,
    SurveyPageQueryActionValidator as QueryActionValidator
} from "./SurveyPageQueryAction";

// import { QuestionsCards as QuestionssCards6 } from '../../Components/Question/QuestionsCards';
import { SurveyQuestionsCardOfCards as QuestionsCards6 } from '../../Components/Survey/QuestionsCardOfCards';

export const SurveyQuestionsPageContent = ({ survey }) => {
    return (
        <LargeCard survey={ survey }>
            {/* other data */}
            { survey?.questions?
                <QuestionsCards6 survey={ survey }/>
                :null 
            }
        </LargeCard>        
    );    
}

const SurveyQuestionsLazyPageContent = Lazy(SurveyQuestionsPageContent)(QueryAction, QueryActionValidator)
export const SurveyQuestionsCardPage = () => {
    const params = useParams()
    return (<SurveyQuestionsLazyPageContent {...params} />)
}

