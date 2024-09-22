import { useParams } from "react-router-dom"

import { QuestionLargeCard as LargeCard } from "../../Components/Question/QuestionLargeCard";
import { QuestionCardCapsule as CardCapsule } from "../../Components/Question/QuestionCardCapsule";
import { 
    QuestionLazy as Lazy,
} from "../../Components/Question/QuestionLazy";

import { 
    QuestionPageQueryAction as QueryAction,
    QuestionPageQueryActionValidator as QueryActionValidator
} from "./QuestionPageQueryAction";

// import { AnswersCards as AnswerssCards7 } from '../../Components/Answer/AnswersCards';
import { QuestionAnswersCardOfCards as AnswersCards7 } from '../../Components/Question/AnswersCardOfCards';
// import { QuestionvaluesCards as ValuessCards10 } from '../../Components/Questionvalue/QuestionvaluesCards';
import { QuestionValuesCardOfCards as ValuesCards10 } from '../../Components/Question/ValuesCardOfCards';

export const QuestionAnswersPageContent = ({ question }) => {
    return (
        <LargeCard question={ question }>
            {/* other data */}
            { question?.answers?
                <AnswersCards7 question={ question }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const QuestionValuesPageContent = ({ question }) => {
    return (
        <LargeCard question={ question }>
            {/* other data */}
            { question?.values?
                <ValuesCards10 question={ question }/>
                :null 
            }
        </LargeCard>        
    );    
}

const QuestionAnswersLazyPageContent = Lazy(QuestionAnswersPageContent)(QueryAction, QueryActionValidator)
export const QuestionAnswersCardPage = () => {
    const params = useParams()
    return (<QuestionAnswersLazyPageContent {...params} />)
}

const QuestionValuesLazyPageContent = Lazy(QuestionValuesPageContent)(QueryAction, QueryActionValidator)
export const QuestionValuesCardPage = () => {
    const params = useParams()
    return (<QuestionValuesLazyPageContent {...params} />)
}

