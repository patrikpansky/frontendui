// field externalids
// targeting to ExternalId
// going from User
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
import { ExternalidLoadMoreButton } from "../Externalid/ExternalidLoadMoreButton";

export const UserExternalidsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ExternalidsTable externalid={ user?.externalids } {...props}>
            <ExternalidLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ExternalidsTable>
    )
}