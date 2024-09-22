// field externalids
// targeting to ExternalId
// going from Event
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
import { ExternalidLoadMoreButton } from "../Externalid/ExternalidLoadMoreButton";

export const EventExternalidsTableCard = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ExternalidsTable externalid={ event?.externalids } {...props}>
            <ExternalidLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ExternalidsTable>
    )
}