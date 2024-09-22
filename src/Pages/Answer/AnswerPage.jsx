import { useParams } from "react-router-dom"

import { AnswerLazy as Lazy } from "../../Components/Answer/AnswerLazy";
import { AnswerLargeCard as LargeCard } from "../../Components/Answer/AnswerLargeCard";
import { AnswerCardCapsule as CardCapsule } from "../../Components/Answer/AnswerCardCapsule";

import { 
    AnswerPageQueryAction as QueryAction,
    AnswerPageQueryActionValidator as QueryActionValidator
} from "./AnswerPageQueryAction";


export const AnswerPageContentBase = ({ answer, children}) => {
    return (
        <LargeCard answer={ answer }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AnswerPageContent = ({ answer }) => {

        return (
            <AnswerPageContentBase answer={ answer }>
                {/* other data */}
            </AnswerPageContentBase>        
        );    
}

const AnswerLazyPageContent = Lazy(AnswerPageContent)(QueryAction, QueryActionValidator)

export const AnswerPage = () => {
    const params = useParams()
    return (<AnswerLazyPageContent {...params} />)

}
