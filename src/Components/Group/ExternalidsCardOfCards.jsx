// field externalids
// targeting to ExternalId
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { ExternalidsCards } from "../Externalid/ExternalidsCards";
import { GroupExternalidsLoadMoreButton as LoadMoreButton} from "../Group/ExternalidsLoadMoreButton";

export const GroupExternalidsCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Externalids"}>
            <ExternalidsCards externalids={ group?.externalids } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ExternalidsCards>
        </GroupCardCapsule>
    )
}