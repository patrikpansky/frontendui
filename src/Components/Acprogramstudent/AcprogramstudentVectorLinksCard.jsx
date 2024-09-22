import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramstudentCardCapsule } from './AcprogramstudentCardCapsule';
import { AcprogramstudentCardBody } from './AcprogramstudentCardBody';

export const AcprogramstudentVectorLinksCard = ({ acprogramstudent, children, label="" }) => {
    return (
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent } label={label} >
            <ProxyLink to={"/all/acprogramstudent/messages/" + acprogramstudent.id } >messages</ProxyLink><br />
        </AcprogramstudentCardCapsule>        
    )
}

