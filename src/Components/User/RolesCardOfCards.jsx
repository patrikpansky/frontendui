// field roles
// targeting to Role
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RolesCards } from "../Role/RolesCards";
import { UserRolesLoadMoreButton as LoadMoreButton} from "../User/RolesLoadMoreButton";

export const UserRolesCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Roles"}>
            <RolesCards roles={ user?.roles } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RolesCards>
        </UserCardCapsule>
    )
}