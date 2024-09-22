// field publication
// targeting to Publication
// going from Acsubject
import { AcsubjectCardCapsule } from "./AcsubjectCardCapsule";
import { PublicationsCards } from "../Publication/PublicationsCards";
import { AcsubjectPublicationLoadMoreButton as LoadMoreButton} from "../Acsubject/PublicationLoadMoreButton";

export const AcsubjectPublicationCardOfCards = ({ acsubject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } label={"Publication"}>
            <PublicationsCards publications={ acsubject?.publication } {...props} >
                <LoadMoreButton acsubject={ acsubject } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PublicationsCards>
        </AcsubjectCardCapsule>
    )
}