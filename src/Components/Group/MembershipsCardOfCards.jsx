// field memberships
// targeting to Membership
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { MembershipsCards } from "../Membership/MembershipsCards";
import { GroupMembershipsLoadMoreButton as LoadMoreButton} from "../Group/MembershipsLoadMoreButton";

export const GroupMembershipsCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Memberships"}>
            <MembershipsCards memberships={ group?.memberships } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MembershipsCards>
        </GroupCardCapsule>
    )
}