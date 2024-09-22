import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PresenceCardCapsule } from './PresenceCardCapsule';
import { PresenceCardBody } from './PresenceCardBody';

export const PresenceVectorLinksCard = ({ presence, children, label="" }) => {
    return (
        <PresenceCardCapsule presence={ presence } label={label} >
        </PresenceCardCapsule>        
    )
}

