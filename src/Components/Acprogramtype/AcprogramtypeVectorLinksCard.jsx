import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramtypeCardCapsule } from './AcprogramtypeCardCapsule';
import { AcprogramtypeCardBody } from './AcprogramtypeCardBody';

export const AcprogramtypeVectorLinksCard = ({ acprogramtype, children, label="" }) => {
    return (
        <AcprogramtypeCardCapsule acprogramtype={ acprogramtype } label={label} >
        </AcprogramtypeCardCapsule>        
    )
}

