import { useParams } from "react-router-dom"

import { QuestiontypeLazy as Lazy } from "../../Components/Questiontype/QuestiontypeLazy";
import { QuestiontypeLargeCard as LargeCard } from "../../Components/Questiontype/QuestiontypeLargeCard";
import { QuestiontypeCardCapsule as CardCapsule } from "../../Components/Questiontype/QuestiontypeCardCapsule";
import { QuestiontypeEditCard as EditCard } from "../../Components/Questiontype/QuestiontypeEditCard";

import { 
    QuestiontypePageQueryAction as QueryAction,
    QuestiontypePageQueryActionValidator as QueryActionValidator
} from "./QuestiontypePageQueryAction";


export const QuestiontypeEditPageContentBase = ({ questiontype, children}) => {
    return (
        <LargeCard questiontype={ questiontype }>
            {/* other data */}
            <EditCard questiontype={ questiontype }/>
        </LargeCard>        
    );    
}

const QuestiontypeLazyEditPageContent = Lazy(QuestiontypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const QuestiontypeEditPage = () => {
    const params = useParams()
    return (<QuestiontypeLazyEditPageContent {...params} />)

}
