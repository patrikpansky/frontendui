import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcprogramtitletypeCardCapsule } from './AcprogramtitletypeCardCapsule';
import { AcprogramtitletypeCardBody } from './AcprogramtitletypeCardBody';

export const AcprogramtitletypeVectorLinksCard = ({ acprogramtitletype, children, label="" }) => {
    return (
        <AcprogramtitletypeCardCapsule acprogramtitletype={ acprogramtitletype } label={label} >
        </AcprogramtitletypeCardCapsule>        
    )
}

