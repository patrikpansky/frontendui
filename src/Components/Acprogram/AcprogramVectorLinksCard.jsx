import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramCardCapsule } from './AcprogramCardCapsule';
import { AcprogramCardBody } from './AcprogramCardBody';

export const AcprogramVectorLinksCard = ({ acprogram, children, label="" }) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } label={label} >
            <ProxyLink to={"/all/acprogram/subjects/" + acprogram.id } >subjects</ProxyLink><br />
            <ProxyLink to={"/all/acprogram/students/" + acprogram.id } >students</ProxyLink><br />
        </AcprogramCardCapsule>        
    )
}

