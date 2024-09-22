// field externalids
// targeting to ExternalId
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { ExternalidsCards } from "../Externalid/ExternalidsCards";
import { UserExternalidsLoadMoreButton as LoadMoreButton} from "../User/ExternalidsLoadMoreButton";

export const UserExternalidsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Externalids"}>
            <ExternalidsCards externalids={ user?.externalids } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ExternalidsCards>
        </UserCardCapsule>
    )
}