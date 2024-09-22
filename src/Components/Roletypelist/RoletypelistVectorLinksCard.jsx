import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RoletypelistCardCapsule } from './RoletypelistCardCapsule';
import { RoletypelistCardBody } from './RoletypelistCardBody';

export const RoletypelistVectorLinksCard = ({ roletypelist, children, label="" }) => {
    return (
        <RoletypelistCardCapsule roletypelist={ roletypelist } label={label} >
            <ProxyLink to={"/all/roletypelist/roletypes/" + roletypelist.id } >roletypes</ProxyLink><br />
        </RoletypelistCardCapsule>        
    )
}

