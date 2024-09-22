import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcsubjectCardCapsule } from './AcsubjectCardCapsule';
import { AcsubjectCardBody } from './AcsubjectCardBody';

export const AcsubjectVectorLinksCard = ({ acsubject, children, label="" }) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } label={label} >
            <ProxyLink to={"/auto/acsubject/semesters/" + acsubject.id } >semesters</ProxyLink><br />
            <ProxyLink to={"/auto/acsubject/publication/" + acsubject.id } >publication</ProxyLink><br />
        </AcsubjectCardCapsule>        
    )
}

