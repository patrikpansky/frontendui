import { useParams } from "react-router-dom"

import { QuestiontypeLazy as Lazy } from "../../Components/Questiontype/QuestiontypeLazy";
import { QuestiontypeLargeCard as LargeCard } from "../../Components/Questiontype/QuestiontypeLargeCard";
import { QuestiontypeCardCapsule as CardCapsule } from "../../Components/Questiontype/QuestiontypeCardCapsule";

import { 
    QuestiontypePageQueryAction as QueryAction,
    QuestiontypePageQueryActionValidator as QueryActionValidator
} from "./QuestiontypePageQueryAction";


export const QuestiontypePageContentBase = ({ questiontype, children}) => {
    return (
        <LargeCard questiontype={ questiontype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const QuestiontypePageContent = ({ questiontype }) => {

        return (
            <QuestiontypePageContentBase questiontype={ questiontype }>
                {/* other data */}
            </QuestiontypePageContentBase>        
        );    
}

const QuestiontypeLazyPageContent = Lazy(QuestiontypePageContent)(QueryAction, QueryActionValidator)

export const QuestiontypePage = () => {
    const params = useParams()
    return (<QuestiontypeLazyPageContent {...params} />)

}
