import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RoletypeCardCapsule } from './RoletypeCardCapsule';
import { RoletypeCardBody } from './RoletypeCardBody';

export const RoletypeVectorLinksCard = ({ roletype, children, label="" }) => {
    return (
        <RoletypeCardCapsule roletype={ roletype } label={label} >
        </RoletypeCardCapsule>        
    )
}

