import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramstudentstateCardCapsule } from './AcprogramstudentstateCardCapsule';
import { AcprogramstudentstateCardBody } from './AcprogramstudentstateCardBody';

export const AcprogramstudentstateVectorLinksCard = ({ acprogramstudentstate, children, label="" }) => {
    return (
        <AcprogramstudentstateCardCapsule acprogramstudentstate={ acprogramstudentstate } label={label} >
        </AcprogramstudentstateCardCapsule>        
    )
}

