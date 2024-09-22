import { useParams } from "react-router-dom"

import { ActopicLazy as Lazy } from "../../Components/Actopic/ActopicLazy";
import { ActopicLargeCard as LargeCard } from "../../Components/Actopic/ActopicLargeCard";
import { ActopicCardCapsule as CardCapsule } from "../../Components/Actopic/ActopicCardCapsule";
import { ActopicEditCard as EditCard } from "../../Components/Actopic/ActopicEditCard";

import { 
    ActopicPageQueryAction as QueryAction,
    ActopicPageQueryActionValidator as QueryActionValidator
} from "./ActopicPageQueryAction";

import { AclessonsTable as LessonsTable9 } from '../../Components/Aclesson/AclessonsTable';

export const ActopicEditPageContentBase = ({ actopic, children}) => {
    return (
        <LargeCard actopic={ actopic }>
            {/* other data */}
            <EditCard actopic={ actopic }/>
        </LargeCard>        
    );    
}

const ActopicLazyEditPageContent = Lazy(ActopicEditPageContentBase)(QueryAction, QueryActionValidator)

export const ActopicEditPage = () => {
    const params = useParams()
    return (<ActopicLazyEditPageContent {...params} />)

}
