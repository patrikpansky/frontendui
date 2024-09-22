import { useParams } from "react-router-dom"

import { MilestoneLazy as Lazy } from "../../Components/Milestone/MilestoneLazy";
import { MilestoneLargeCard as LargeCard } from "../../Components/Milestone/MilestoneLargeCard";
import { MilestoneCardCapsule as CardCapsule } from "../../Components/Milestone/MilestoneCardCapsule";
import { MilestoneEditCard as EditCard } from "../../Components/Milestone/MilestoneEditCard";

import { 
    MilestonePageQueryAction as QueryAction,
    MilestonePageQueryActionValidator as QueryActionValidator
} from "./MilestonePageQueryAction";

import { MilestonesTable as PreviousTable11 } from '../../Components/Milestone/MilestonesTable';
import { MilestonesTable as NextsTable12 } from '../../Components/Milestone/MilestonesTable';

export const MilestoneEditPageContentBase = ({ milestone, children}) => {
    return (
        <LargeCard milestone={ milestone }>
            {/* other data */}
            <EditCard milestone={ milestone }/>
        </LargeCard>        
    );    
}

const MilestoneLazyEditPageContent = Lazy(MilestoneEditPageContentBase)(QueryAction, QueryActionValidator)

export const MilestoneEditPage = () => {
    const params = useParams()
    return (<MilestoneLazyEditPageContent {...params} />)

}
