// field externalids
// targeting to ExternalId
// going from Facility
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
import { ExternalidLoadMoreButton } from "../Externalid/ExternalidLoadMoreButton";

export const FacilityExternalidsTableCard = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ExternalidsTable externalid={ facility?.externalids } {...props}>
            <ExternalidLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ExternalidsTable>
    )
}