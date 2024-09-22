import { useParams } from "react-router-dom"

import { AclessonLazy as Lazy } from "../../Components/Aclesson/AclessonLazy";
import { AclessonLargeCard as LargeCard } from "../../Components/Aclesson/AclessonLargeCard";
import { AclessonCardCapsule as CardCapsule } from "../../Components/Aclesson/AclessonCardCapsule";

import { 
    AclessonPageQueryAction as QueryAction,
    AclessonPageQueryActionValidator as QueryActionValidator
} from "./AclessonPageQueryAction";


export const AclessonPageContentBase = ({ aclesson, children}) => {
    return (
        <LargeCard aclesson={ aclesson }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AclessonPageContent = ({ aclesson }) => {

        return (
            <AclessonPageContentBase aclesson={ aclesson }>
                {/* other data */}
            </AclessonPageContentBase>        
        );    
}

const AclessonLazyPageContent = Lazy(AclessonPageContent)(QueryAction, QueryActionValidator)

export const AclessonPage = () => {
    const params = useParams()
    return (<AclessonLazyPageContent {...params} />)

}
