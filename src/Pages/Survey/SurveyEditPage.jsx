import { useParams } from "react-router-dom"

import { SurveyLazy as Lazy } from "../../Components/Survey/SurveyLazy";
import { SurveyLargeCard as LargeCard } from "../../Components/Survey/SurveyLargeCard";
import { SurveyCardCapsule as CardCapsule } from "../../Components/Survey/SurveyCardCapsule";
import { SurveyEditCard as EditCard } from "../../Components/Survey/SurveyEditCard";

import { 
    SurveyPageQueryAction as QueryAction,
    SurveyPageQueryActionValidator as QueryActionValidator
} from "./SurveyPageQueryAction";

import { QuestionsTable as QuestionsTable6 } from '../../Components/Question/QuestionsTable';

export const SurveyEditPageContentBase = ({ survey, children}) => {
    return (
        <LargeCard survey={ survey }>
            {/* other data */}
            <EditCard survey={ survey }/>
        </LargeCard>        
    );    
}

const SurveyLazyEditPageContent = Lazy(SurveyEditPageContentBase)(QueryAction, QueryActionValidator)

export const SurveyEditPage = () => {
    const params = useParams()
    return (<SurveyLazyEditPageContent {...params} />)

}
