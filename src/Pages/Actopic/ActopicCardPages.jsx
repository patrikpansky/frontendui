import { useParams } from "react-router-dom"

import { ActopicLargeCard as LargeCard } from "../../Components/Actopic/ActopicLargeCard";
import { ActopicCardCapsule as CardCapsule } from "../../Components/Actopic/ActopicCardCapsule";
import { 
    ActopicLazy as Lazy,
} from "../../Components/Actopic/ActopicLazy";

import { 
    ActopicPageQueryAction as QueryAction,
    ActopicPageQueryActionValidator as QueryActionValidator
} from "./ActopicPageQueryAction";

// import { AclessonsCards as LessonssCards9 } from '../../Components/Aclesson/AclessonsCards';
import { ActopicLessonsCardOfCards as LessonsCards9 } from '../../Components/Actopic/LessonsCardOfCards';

export const ActopicLessonsPageContent = ({ actopic }) => {
    return (
        <LargeCard actopic={ actopic }>
            {/* other data */}
            { actopic?.lessons?
                <LessonsCards9 actopic={ actopic }/>
                :null 
            }
        </LargeCard>        
    );    
}

const ActopicLessonsLazyPageContent = Lazy(ActopicLessonsPageContent)(QueryAction, QueryActionValidator)
export const ActopicLessonsCardPage = () => {
    const params = useParams()
    return (<ActopicLessonsLazyPageContent {...params} />)
}

