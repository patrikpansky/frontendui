// field nexts
// targeting to Milestone
// going from Milestone
import { MilestoneCardCapsule } from "./MilestoneCardCapsule";
import { MilestonesCards } from "../Milestone/MilestonesCards";
import { MilestoneNextsLoadMoreButton as LoadMoreButton} from "../Milestone/NextsLoadMoreButton";

export const MilestoneNextsCardOfCards = ({ milestone, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } label={"Nexts"}>
            <MilestonesCards milestones={ milestone?.nexts } {...props} >
                <LoadMoreButton milestone={ milestone } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MilestonesCards>
        </MilestoneCardCapsule>
    )
}