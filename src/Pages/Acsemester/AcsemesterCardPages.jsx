import { useParams } from "react-router-dom"

import { AcsemesterLargeCard as LargeCard } from "../../Components/Acsemester/AcsemesterLargeCard";
import { AcsemesterCardCapsule as CardCapsule } from "../../Components/Acsemester/AcsemesterCardCapsule";
import { 
    AcsemesterLazy as Lazy,
} from "../../Components/Acsemester/AcsemesterLazy";

import { 
    AcsemesterPageQueryAction as QueryAction,
    AcsemesterPageQueryActionValidator as QueryActionValidator
} from "./AcsemesterPageQueryAction";

// import { AcclassificationsCards as ClassificationssCards8 } from '../../Components/Acclassification/AcclassificationsCards';
import { AcsemesterClassificationsCardOfCards as ClassificationsCards8 } from '../../Components/Acsemester/ClassificationsCardOfCards';
// import { ActopicsCards as TopicssCards9 } from '../../Components/Actopic/ActopicsCards';
import { AcsemesterTopicsCardOfCards as TopicsCards9 } from '../../Components/Acsemester/TopicsCardOfCards';
// import { PlansCards as PlanssCards10 } from '../../Components/Plan/PlansCards';
import { AcsemesterPlansCardOfCards as PlansCards10 } from '../../Components/Acsemester/PlansCardOfCards';

export const AcsemesterClassificationsPageContent = ({ acsemester }) => {
    return (
        <LargeCard acsemester={ acsemester }>
            {/* other data */}
            { acsemester?.classifications?
                <ClassificationsCards8 acsemester={ acsemester }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const AcsemesterTopicsPageContent = ({ acsemester }) => {
    return (
        <LargeCard acsemester={ acsemester }>
            {/* other data */}
            { acsemester?.topics?
                <TopicsCards9 acsemester={ acsemester }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const AcsemesterPlansPageContent = ({ acsemester }) => {
    return (
        <LargeCard acsemester={ acsemester }>
            {/* other data */}
            { acsemester?.plans?
                <PlansCards10 acsemester={ acsemester }/>
                :null 
            }
        </LargeCard>        
    );    
}

const AcsemesterClassificationsLazyPageContent = Lazy(AcsemesterClassificationsPageContent)(QueryAction, QueryActionValidator)
export const AcsemesterClassificationsCardPage = () => {
    const params = useParams()
    return (<AcsemesterClassificationsLazyPageContent {...params} />)
}

const AcsemesterTopicsLazyPageContent = Lazy(AcsemesterTopicsPageContent)(QueryAction, QueryActionValidator)
export const AcsemesterTopicsCardPage = () => {
    const params = useParams()
    return (<AcsemesterTopicsLazyPageContent {...params} />)
}

const AcsemesterPlansLazyPageContent = Lazy(AcsemesterPlansPageContent)(QueryAction, QueryActionValidator)
export const AcsemesterPlansCardPage = () => {
    const params = useParams()
    return (<AcsemesterPlansLazyPageContent {...params} />)
}

