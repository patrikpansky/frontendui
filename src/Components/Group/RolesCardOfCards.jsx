// field roles
// targeting to Role
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { RolesCards } from "../Role/RolesCards";
import { GroupRolesLoadMoreButton as LoadMoreButton} from "../Group/RolesLoadMoreButton";

export const GroupRolesCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Roles"}>
            <RolesCards roles={ group?.roles } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RolesCards>
        </GroupCardCapsule>
    )
}