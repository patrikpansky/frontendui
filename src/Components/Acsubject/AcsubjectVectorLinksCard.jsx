import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcsubjectCardCapsule } from './AcsubjectCardCapsule';
import { AcsubjectCardBody } from './AcsubjectCardBody';

export const AcsubjectVectorLinksCard = ({ acsubject, children, label="" }) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } label={label} >
            <ProxyLink to={"/all/acsubject/semesters/" + acsubject.id } >semesters</ProxyLink><br />
            <ProxyLink to={"/all/acsubject/publication/" + acsubject.id } >publication</ProxyLink><br />
        </AcsubjectCardCapsule>        
    )
}

