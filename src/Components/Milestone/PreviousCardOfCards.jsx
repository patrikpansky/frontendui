// field previous
// targeting to Milestone
// going from Milestone
import { MilestoneCardCapsule } from "./MilestoneCardCapsule";
import { MilestonesCards } from "../Milestone/MilestonesCards";
import { MilestonePreviousLoadMoreButton as LoadMoreButton} from "../Milestone/PreviousLoadMoreButton";

export const MilestonePreviousCardOfCards = ({ milestone, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } label={"Previous"}>
            <MilestonesCards milestones={ milestone?.previous } {...props} >
                <LoadMoreButton milestone={ milestone } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MilestonesCards>
        </MilestoneCardCapsule>
    )
}