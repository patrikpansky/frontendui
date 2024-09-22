import { useParams } from "react-router-dom"

import { QuestionLazy as Lazy } from "../../Components/Question/QuestionLazy";
import { QuestionLargeCard as LargeCard } from "../../Components/Question/QuestionLargeCard";
import { QuestionCardCapsule as CardCapsule } from "../../Components/Question/QuestionCardCapsule";
import { QuestionEditCard as EditCard } from "../../Components/Question/QuestionEditCard";

import { 
    QuestionPageQueryAction as QueryAction,
    QuestionPageQueryActionValidator as QueryActionValidator
} from "./QuestionPageQueryAction";

import { AnswersTable as AnswersTable7 } from '../../Components/Answer/AnswersTable';
import { QuestionvaluesTable as ValuesTable10 } from '../../Components/Questionvalue/QuestionvaluesTable';

export const QuestionEditPageContentBase = ({ question, children}) => {
    return (
        <LargeCard question={ question }>
            {/* other data */}
            <EditCard question={ question }/>
        </LargeCard>        
    );    
}

const QuestionLazyEditPageContent = Lazy(QuestionEditPageContentBase)(QueryAction, QueryActionValidator)

export const QuestionEditPage = () => {
    const params = useParams()
    return (<QuestionLazyEditPageContent {...params} />)

}
