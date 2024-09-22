import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcclassificationtypeCardCapsule } from './AcclassificationtypeCardCapsule';
import { AcclassificationtypeCardBody } from './AcclassificationtypeCardBody';

export const AcclassificationtypeVectorLinksCard = ({ acclassificationtype, children, label="" }) => {
    return (
        <AcclassificationtypeCardCapsule acclassificationtype={ acclassificationtype } label={label} >
        </AcclassificationtypeCardCapsule>        
    )
}

