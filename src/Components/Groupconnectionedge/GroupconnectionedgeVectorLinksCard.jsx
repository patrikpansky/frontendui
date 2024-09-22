import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { GroupconnectionedgeCardCapsule } from './GroupconnectionedgeCardCapsule';
import { GroupconnectionedgeCardBody } from './GroupconnectionedgeCardBody';

export const GroupconnectionedgeVectorLinksCard = ({ groupconnectionedge, children, label="" }) => {
    return (
        <GroupconnectionedgeCardCapsule groupconnectionedge={ groupconnectionedge } label={label} >
        </GroupconnectionedgeCardCapsule>        
    )
}

