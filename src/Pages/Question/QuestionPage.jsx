import { useParams } from "react-router-dom"

import { QuestionLazy as Lazy } from "../../Components/Question/QuestionLazy";
import { QuestionLargeCard as LargeCard } from "../../Components/Question/QuestionLargeCard";
import { QuestionCardCapsule as CardCapsule } from "../../Components/Question/QuestionCardCapsule";

import { 
    QuestionPageQueryAction as QueryAction,
    QuestionPageQueryActionValidator as QueryActionValidator
} from "./QuestionPageQueryAction";

import { AnswersTable as AnswersTable7 } from '../../Components/Answer/AnswersTable';
import { QuestionvaluesTable as ValuesTable10 } from '../../Components/Questionvalue/QuestionvaluesTable';

export const QuestionPageContentBase = ({ question, children}) => {
    return (
        <LargeCard question={ question }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const QuestionPageContent = ({ question }) => {

        return (
            <QuestionPageContentBase question={ question }>
                {/* other data */}
                { question?.answers?
                    <CardCapsule question={ question } label={ "answers" }>
                        <AnswersTable7 answers={ question?.answers || []}/>
                    </CardCapsule>:null
                }
                { question?.values?
                    <CardCapsule question={ question } label={ "values" }>
                        <ValuesTable10 questionvalues={ question?.values || []}/>
                    </CardCapsule>:null
                }
            </QuestionPageContentBase>        
        );    
}

const QuestionLazyPageContent = Lazy(QuestionPageContent)(QueryAction, QueryActionValidator)

export const QuestionPage = () => {
    const params = useParams()
    return (<QuestionLazyPageContent {...params} />)

}
