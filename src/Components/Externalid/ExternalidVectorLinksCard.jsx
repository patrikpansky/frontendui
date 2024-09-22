import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ExternalidCardCapsule } from './ExternalidCardCapsule';
import { ExternalidCardBody } from './ExternalidCardBody';

export const ExternalidVectorLinksCard = ({ externalid, children, label="" }) => {
    return (
        <ExternalidCardCapsule externalid={ externalid } label={label} >
        </ExternalidCardCapsule>        
    )
}

