import { useParams } from "react-router-dom"

import { SurveyLazy as Lazy } from "../../Components/Survey/SurveyLazy";
import { SurveyLargeCard as LargeCard } from "../../Components/Survey/SurveyLargeCard";
import { SurveyCardCapsule as CardCapsule } from "../../Components/Survey/SurveyCardCapsule";

import { 
    SurveyPageQueryAction as QueryAction,
    SurveyPageQueryActionValidator as QueryActionValidator
} from "./SurveyPageQueryAction";

import { QuestionsTable as QuestionsTable6 } from '../../Components/Question/QuestionsTable';

export const SurveyPageContentBase = ({ survey, children}) => {
    return (
        <LargeCard survey={ survey }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const SurveyPageContent = ({ survey }) => {

        return (
            <SurveyPageContentBase survey={ survey }>
                {/* other data */}
                { survey?.questions?
                    <CardCapsule survey={ survey } label={ "questions" }>
                        <QuestionsTable6 questions={ survey?.questions || []}/>
                    </CardCapsule>:null
                }
            </SurveyPageContentBase>        
        );    
}

const SurveyLazyPageContent = Lazy(SurveyPageContent)(QueryAction, QueryActionValidator)

export const SurveyPage = () => {
    const params = useParams()
    return (<SurveyLazyPageContent {...params} />)

}
