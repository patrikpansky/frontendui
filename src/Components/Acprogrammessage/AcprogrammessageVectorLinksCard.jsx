import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogrammessageCardCapsule } from './AcprogrammessageCardCapsule';
import { AcprogrammessageCardBody } from './AcprogrammessageCardBody';

export const AcprogrammessageVectorLinksCard = ({ acprogrammessage, children, label="" }) => {
    return (
        <AcprogrammessageCardCapsule acprogrammessage={ acprogrammessage } label={label} >
        </AcprogrammessageCardCapsule>        
    )
}

