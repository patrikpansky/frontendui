import { useParams } from "react-router-dom"

import { MilestoneLargeCard as LargeCard } from "../../Components/Milestone/MilestoneLargeCard";
import { MilestoneCardCapsule as CardCapsule } from "../../Components/Milestone/MilestoneCardCapsule";
import { 
    MilestoneLazy as Lazy,
} from "../../Components/Milestone/MilestoneLazy";

import { 
    MilestonePageQueryAction as QueryAction,
    MilestonePageQueryActionValidator as QueryActionValidator
} from "./MilestonePageQueryAction";

// import { MilestonesCards as PrevioussCards11 } from '../../Components/Milestone/MilestonesCards';
import { MilestonePreviousCardOfCards as PreviousCards11 } from '../../Components/Milestone/PreviousCardOfCards';
// import { MilestonesCards as NextssCards12 } from '../../Components/Milestone/MilestonesCards';
import { MilestoneNextsCardOfCards as NextsCards12 } from '../../Components/Milestone/NextsCardOfCards';

export const MilestonePreviousPageContent = ({ milestone }) => {
    return (
        <LargeCard milestone={ milestone }>
            {/* other data */}
            { milestone?.previous?
                <PreviousCards11 milestone={ milestone }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const MilestoneNextsPageContent = ({ milestone }) => {
    return (
        <LargeCard milestone={ milestone }>
            {/* other data */}
            { milestone?.nexts?
                <NextsCards12 milestone={ milestone }/>
                :null 
            }
        </LargeCard>        
    );    
}

const MilestonePreviousLazyPageContent = Lazy(MilestonePreviousPageContent)(QueryAction, QueryActionValidator)
export const MilestonePreviousCardPage = () => {
    const params = useParams()
    return (<MilestonePreviousLazyPageContent {...params} />)
}

const MilestoneNextsLazyPageContent = Lazy(MilestoneNextsPageContent)(QueryAction, QueryActionValidator)
export const MilestoneNextsCardPage = () => {
    const params = useParams()
    return (<MilestoneNextsLazyPageContent {...params} />)
}

