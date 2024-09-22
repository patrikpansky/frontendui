import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcclassificationCardCapsule } from './AcclassificationCardCapsule';
import { AcclassificationCardBody } from './AcclassificationCardBody';

export const AcclassificationVectorLinksCard = ({ acclassification, children, label="" }) => {
    return (
        <AcclassificationCardCapsule acclassification={ acclassification } label={label} >
        </AcclassificationCardCapsule>        
    )
}

