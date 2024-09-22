import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { infoCardCapsule } from './infoCardCapsule';
import { infoCardBody } from './infoCardBody';

export const infoVectorLinksCard = ({ pageinfo, children, label="" }) => {
    return (
        <infoCardCapsule pageinfo={ pageinfo } label={label} >
        </infoCardCapsule>        
    )
}

