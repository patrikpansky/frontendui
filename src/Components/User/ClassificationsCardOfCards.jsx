// field classifications
// targeting to AcClassification
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AcclassificationsCards } from "../Acclassification/AcclassificationsCards";
import { UserClassificationsLoadMoreButton as LoadMoreButton} from "../User/ClassificationsLoadMoreButton";

export const UserClassificationsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Classifications"}>
            <AcclassificationsCards acclassifications={ user?.classifications } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcclassificationsCards>
        </UserCardCapsule>
    )
}