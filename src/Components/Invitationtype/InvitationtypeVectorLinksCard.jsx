import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { InvitationtypeCardCapsule } from './InvitationtypeCardCapsule';
import { InvitationtypeCardBody } from './InvitationtypeCardBody';

export const InvitationtypeVectorLinksCard = ({ invitationtype, children, label="" }) => {
    return (
        <InvitationtypeCardCapsule invitationtype={ invitationtype } label={label} >
        </InvitationtypeCardCapsule>        
    )
}

