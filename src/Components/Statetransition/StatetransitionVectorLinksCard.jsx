import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { StatetransitionCardCapsule } from './StatetransitionCardCapsule';
import { StatetransitionCardBody } from './StatetransitionCardBody';

export const StatetransitionVectorLinksCard = ({ statetransition, children, label="" }) => {
    return (
        <StatetransitionCardCapsule statetransition={ statetransition } label={label} >
        </StatetransitionCardCapsule>        
    )
}

