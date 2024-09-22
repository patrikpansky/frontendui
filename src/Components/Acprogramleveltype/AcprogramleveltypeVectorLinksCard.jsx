import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramleveltypeCardCapsule } from './AcprogramleveltypeCardCapsule';
import { AcprogramleveltypeCardBody } from './AcprogramleveltypeCardBody';

export const AcprogramleveltypeVectorLinksCard = ({ acprogramleveltype, children, label="" }) => {
    return (
        <AcprogramleveltypeCardCapsule acprogramleveltype={ acprogramleveltype } label={label} >
        </AcprogramleveltypeCardCapsule>        
    )
}

