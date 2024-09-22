// field externalids
// targeting to ExternalId
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { ExternalidsCards } from "../Externalid/ExternalidsCards";
import { FacilityExternalidsLoadMoreButton as LoadMoreButton} from "../Facility/ExternalidsLoadMoreButton";

export const FacilityExternalidsCardOfCards = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } label={"Externalids"}>
            <ExternalidsCards externalids={ facility?.externalids } {...props} >
                <LoadMoreButton facility={ facility } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ExternalidsCards>
        </FacilityCardCapsule>
    )
}