// field presences
// targeting to Presence
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PresencesCards } from "../Presence/PresencesCards";
import { UserPresencesLoadMoreButton as LoadMoreButton} from "../User/PresencesLoadMoreButton";

export const UserPresencesCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Presences"}>
            <PresencesCards presences={ user?.presences } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PresencesCards>
        </UserCardCapsule>
    )
}