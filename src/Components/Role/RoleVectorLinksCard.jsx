import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RoleCardCapsule } from './RoleCardCapsule';
import { RoleCardBody } from './RoleCardBody';

export const RoleVectorLinksCard = ({ role, children, label="" }) => {
    return (
        <RoleCardCapsule role={ role } label={label} >
        </RoleCardCapsule>        
    )
}

