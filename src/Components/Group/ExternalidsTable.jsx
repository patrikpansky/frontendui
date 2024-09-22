// field externalids
// targeting to ExternalId
// going from Group
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
import { ExternalidLoadMoreButton } from "../Externalid/ExternalidLoadMoreButton";

export const GroupExternalidsTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ExternalidsTable externalid={ group?.externalids } {...props}>
            <ExternalidLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ExternalidsTable>
    )
}