import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AclessontypeCardCapsule } from './AclessontypeCardCapsule';
import { AclessontypeCardBody } from './AclessontypeCardBody';

export const AclessontypeVectorLinksCard = ({ aclessontype, children, label="" }) => {
    return (
        <AclessontypeCardCapsule aclessontype={ aclessontype } label={label} >
        </AclessontypeCardCapsule>        
    )
}

