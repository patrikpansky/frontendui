import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcclassificationlevelCardCapsule } from './AcclassificationlevelCardCapsule';
import { AcclassificationlevelCardBody } from './AcclassificationlevelCardBody';

export const AcclassificationlevelVectorLinksCard = ({ acclassificationlevel, children, label="" }) => {
    return (
        <AcclassificationlevelCardCapsule acclassificationlevel={ acclassificationlevel } label={label} >
        </AcclassificationlevelCardCapsule>        
    )
}

