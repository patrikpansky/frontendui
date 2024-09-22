// field subgroups
// targeting to Group
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { GroupsCards } from "../Group/GroupsCards";
import { GroupSubgroupsLoadMoreButton as LoadMoreButton} from "../Group/SubgroupsLoadMoreButton";

export const GroupSubgroupsCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Subgroups"}>
            <GroupsCards groups={ group?.subgroups } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GroupsCards>
        </GroupCardCapsule>
    )
}