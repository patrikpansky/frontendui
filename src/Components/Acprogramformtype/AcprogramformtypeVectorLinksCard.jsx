import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramformtypeCardCapsule } from './AcprogramformtypeCardCapsule';
import { AcprogramformtypeCardBody } from './AcprogramformtypeCardBody';

export const AcprogramformtypeVectorLinksCard = ({ acprogramformtype, children, label="" }) => {
    return (
        <AcprogramformtypeCardCapsule acprogramformtype={ acprogramformtype } label={label} >
        </AcprogramformtypeCardCapsule>        
    )
}

