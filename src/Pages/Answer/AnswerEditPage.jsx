import { useParams } from "react-router-dom"

import { AnswerLazy as Lazy } from "../../Components/Answer/AnswerLazy";
import { AnswerLargeCard as LargeCard } from "../../Components/Answer/AnswerLargeCard";
import { AnswerCardCapsule as CardCapsule } from "../../Components/Answer/AnswerCardCapsule";
import { AnswerEditCard as EditCard } from "../../Components/Answer/AnswerEditCard";

import { 
    AnswerPageQueryAction as QueryAction,
    AnswerPageQueryActionValidator as QueryActionValidator
} from "./AnswerPageQueryAction";


export const AnswerEditPageContentBase = ({ answer, children}) => {
    return (
        <LargeCard answer={ answer }>
            {/* other data */}
            <EditCard answer={ answer }/>
        </LargeCard>        
    );    
}

const AnswerLazyEditPageContent = Lazy(AnswerEditPageContentBase)(QueryAction, QueryActionValidator)

export const AnswerEditPage = () => {
    const params = useParams()
    return (<AnswerLazyEditPageContent {...params} />)

}
