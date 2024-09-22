// field roleson
// targeting to Role
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RolesCards } from "../Role/RolesCards";
import { UserRolesonLoadMoreButton as LoadMoreButton} from "../User/RolesonLoadMoreButton";

export const UserRolesonCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Roleson"}>
            <RolesCards roles={ user?.roleson } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RolesCards>
        </UserCardCapsule>
    )
}