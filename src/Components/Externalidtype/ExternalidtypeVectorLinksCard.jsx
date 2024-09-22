import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ExternalidtypeCardCapsule } from './ExternalidtypeCardCapsule';
import { ExternalidtypeCardBody } from './ExternalidtypeCardBody';

export const ExternalidtypeVectorLinksCard = ({ externalidtype, children, label="" }) => {
    return (
        <ExternalidtypeCardCapsule externalidtype={ externalidtype } label={label} >
        </ExternalidtypeCardCapsule>        
    )
}

