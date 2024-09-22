import { useParams } from "react-router-dom"

import { ActopicLazy as Lazy } from "../../Components/Actopic/ActopicLazy";
import { ActopicLargeCard as LargeCard } from "../../Components/Actopic/ActopicLargeCard";
import { ActopicCardCapsule as CardCapsule } from "../../Components/Actopic/ActopicCardCapsule";

import { 
    ActopicPageQueryAction as QueryAction,
    ActopicPageQueryActionValidator as QueryActionValidator
} from "./ActopicPageQueryAction";

import { AclessonsTable as LessonsTable9 } from '../../Components/Aclesson/AclessonsTable';

export const ActopicPageContentBase = ({ actopic, children}) => {
    return (
        <LargeCard actopic={ actopic }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const ActopicPageContent = ({ actopic }) => {

        return (
            <ActopicPageContentBase actopic={ actopic }>
                {/* other data */}
                { actopic?.lessons?
                    <CardCapsule actopic={ actopic } label={ "lessons" }>
                        <LessonsTable9 aclessons={ actopic?.lessons || []}/>
                    </CardCapsule>:null
                }
            </ActopicPageContentBase>        
        );    
}

const ActopicLazyPageContent = Lazy(ActopicPageContent)(QueryAction, QueryActionValidator)

export const ActopicPage = () => {
    const params = useParams()
    return (<ActopicLazyPageContent {...params} />)

}
