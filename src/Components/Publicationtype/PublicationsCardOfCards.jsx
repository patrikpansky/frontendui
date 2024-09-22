// field publications
// targeting to Publication
// going from Publicationtype
import { PublicationtypeCardCapsule } from "./PublicationtypeCardCapsule";
import { PublicationsCards } from "../Publication/PublicationsCards";
import { PublicationtypePublicationsLoadMoreButton as LoadMoreButton} from "../Publicationtype/PublicationsLoadMoreButton";

export const PublicationtypePublicationsCardOfCards = ({ publicationtype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationtypeCardCapsule publicationtype={ publicationtype } label={"Publications"}>
            <PublicationsCards publications={ publicationtype?.publications } {...props} >
                <LoadMoreButton publicationtype={ publicationtype } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PublicationsCards>
        </PublicationtypeCardCapsule>
    )
}