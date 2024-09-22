import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PresencetypeCardCapsule } from './PresencetypeCardCapsule';
import { PresencetypeCardBody } from './PresencetypeCardBody';

export const PresencetypeVectorLinksCard = ({ presencetype, children, label="" }) => {
    return (
        <PresencetypeCardCapsule presencetype={ presencetype } label={label} >
        </PresencetypeCardCapsule>        
    )
}

