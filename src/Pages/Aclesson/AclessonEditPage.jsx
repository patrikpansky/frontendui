import { useParams } from "react-router-dom"

import { AclessonLazy as Lazy } from "../../Components/Aclesson/AclessonLazy";
import { AclessonLargeCard as LargeCard } from "../../Components/Aclesson/AclessonLargeCard";
import { AclessonCardCapsule as CardCapsule } from "../../Components/Aclesson/AclessonCardCapsule";
import { AclessonEditCard as EditCard } from "../../Components/Aclesson/AclessonEditCard";

import { 
    AclessonPageQueryAction as QueryAction,
    AclessonPageQueryActionValidator as QueryActionValidator
} from "./AclessonPageQueryAction";


export const AclessonEditPageContentBase = ({ aclesson, children}) => {
    return (
        <LargeCard aclesson={ aclesson }>
            {/* other data */}
            <EditCard aclesson={ aclesson }/>
        </LargeCard>        
    );    
}

const AclessonLazyEditPageContent = Lazy(AclessonEditPageContentBase)(QueryAction, QueryActionValidator)

export const AclessonEditPage = () => {
    const params = useParams()
    return (<AclessonLazyEditPageContent {...params} />)

}
