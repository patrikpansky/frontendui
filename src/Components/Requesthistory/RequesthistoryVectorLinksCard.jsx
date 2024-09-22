import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RequesthistoryCardCapsule } from './RequesthistoryCardCapsule';
import { RequesthistoryCardBody } from './RequesthistoryCardBody';

export const RequesthistoryVectorLinksCard = ({ requesthistory, children, label="" }) => {
    return (
        <RequesthistoryCardCapsule requesthistory={ requesthistory } label={label} >
        </RequesthistoryCardCapsule>        
    )
}

