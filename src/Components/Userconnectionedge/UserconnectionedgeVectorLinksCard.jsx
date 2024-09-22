import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { UserconnectionedgeCardCapsule } from './UserconnectionedgeCardCapsule';
import { UserconnectionedgeCardBody } from './UserconnectionedgeCardBody';

export const UserconnectionedgeVectorLinksCard = ({ userconnectionedge, children, label="" }) => {
    return (
        <UserconnectionedgeCardCapsule userconnectionedge={ userconnectionedge } label={label} >
        </UserconnectionedgeCardCapsule>        
    )
}

