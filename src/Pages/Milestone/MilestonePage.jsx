import { useParams } from "react-router-dom"

import { MilestoneLazy as Lazy } from "../../Components/Milestone/MilestoneLazy";
import { MilestoneLargeCard as LargeCard } from "../../Components/Milestone/MilestoneLargeCard";
import { MilestoneCardCapsule as CardCapsule } from "../../Components/Milestone/MilestoneCardCapsule";

import { 
    MilestonePageQueryAction as QueryAction,
    MilestonePageQueryActionValidator as QueryActionValidator
} from "./MilestonePageQueryAction";

import { MilestonesTable as PreviousTable11 } from '../../Components/Milestone/MilestonesTable';
import { MilestonesTable as NextsTable12 } from '../../Components/Milestone/MilestonesTable';

export const MilestonePageContentBase = ({ milestone, children}) => {
    return (
        <LargeCard milestone={ milestone }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const MilestonePageContent = ({ milestone }) => {

        return (
            <MilestonePageContentBase milestone={ milestone }>
                {/* other data */}
                { milestone?.previous?
                    <CardCapsule milestone={ milestone } label={ "previous" }>
                        <PreviousTable11 milestones={ milestone?.previous || []}/>
                    </CardCapsule>:null
                }
                { milestone?.nexts?
                    <CardCapsule milestone={ milestone } label={ "nexts" }>
                        <NextsTable12 milestones={ milestone?.nexts || []}/>
                    </CardCapsule>:null
                }
            </MilestonePageContentBase>        
        );    
}

const MilestoneLazyPageContent = Lazy(MilestonePageContent)(QueryAction, QueryActionValidator)

export const MilestonePage = () => {
    const params = useParams()
    return (<MilestoneLazyPageContent {...params} />)

}
