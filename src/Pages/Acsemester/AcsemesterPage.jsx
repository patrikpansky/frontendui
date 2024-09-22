import { useParams } from "react-router-dom"

import { AcsemesterLazy as Lazy } from "../../Components/Acsemester/AcsemesterLazy";
import { AcsemesterLargeCard as LargeCard } from "../../Components/Acsemester/AcsemesterLargeCard";
import { AcsemesterCardCapsule as CardCapsule } from "../../Components/Acsemester/AcsemesterCardCapsule";

import { 
    AcsemesterPageQueryAction as QueryAction,
    AcsemesterPageQueryActionValidator as QueryActionValidator
} from "./AcsemesterPageQueryAction";

import { AcclassificationsTable as ClassificationsTable8 } from '../../Components/Acclassification/AcclassificationsTable';
import { ActopicsTable as TopicsTable9 } from '../../Components/Actopic/ActopicsTable';
import { PlansTable as PlansTable10 } from '../../Components/Plan/PlansTable';

export const AcsemesterPageContentBase = ({ acsemester, children}) => {
    return (
        <LargeCard acsemester={ acsemester }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcsemesterPageContent = ({ acsemester }) => {

        return (
            <AcsemesterPageContentBase acsemester={ acsemester }>
                {/* other data */}
                { acsemester?.classifications?
                    <CardCapsule acsemester={ acsemester } label={ "classifications" }>
                        <ClassificationsTable8 acclassifications={ acsemester?.classifications || []}/>
                    </CardCapsule>:null
                }
                { acsemester?.topics?
                    <CardCapsule acsemester={ acsemester } label={ "topics" }>
                        <TopicsTable9 actopics={ acsemester?.topics || []}/>
                    </CardCapsule>:null
                }
                { acsemester?.plans?
                    <CardCapsule acsemester={ acsemester } label={ "plans" }>
                        <PlansTable10 plans={ acsemester?.plans || []}/>
                    </CardCapsule>:null
                }
            </AcsemesterPageContentBase>        
        );    
}

const AcsemesterLazyPageContent = Lazy(AcsemesterPageContent)(QueryAction, QueryActionValidator)

export const AcsemesterPage = () => {
    const params = useParams()
    return (<AcsemesterLazyPageContent {...params} />)

}
