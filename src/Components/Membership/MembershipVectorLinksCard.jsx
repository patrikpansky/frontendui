import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { MembershipCardCapsule } from './MembershipCardCapsule';
import { MembershipCardBody } from './MembershipCardBody';

export const MembershipVectorLinksCard = ({ membership, children, label="" }) => {
    return (
        <MembershipCardCapsule membership={ membership } label={label} >
        </MembershipCardCapsule>        
    )
}

