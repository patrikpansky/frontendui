import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramCardCapsule } from './AcprogramCardCapsule';
import { AcprogramCardBody } from './AcprogramCardBody';

export const AcprogramVectorLinksCard = ({ acprogram, children, label="" }) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } label={label} >
            <ProxyLink to={"/auto/acprogram/subjects/" + acprogram.id } >subjects</ProxyLink><br />
            <ProxyLink to={"/auto/acprogram/students/" + acprogram.id } >students</ProxyLink><br />
        </AcprogramCardCapsule>        
    )
}

