import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramlanguagetypeCardCapsule } from './AcprogramlanguagetypeCardCapsule';
import { AcprogramlanguagetypeCardBody } from './AcprogramlanguagetypeCardBody';

export const AcprogramlanguagetypeVectorLinksCard = ({ acprogramlanguagetype, children, label="" }) => {
    return (
        <AcprogramlanguagetypeCardCapsule acprogramlanguagetype={ acprogramlanguagetype } label={label} >
        </AcprogramlanguagetypeCardCapsule>        
    )
}

