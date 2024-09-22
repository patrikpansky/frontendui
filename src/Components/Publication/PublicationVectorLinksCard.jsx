import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PublicationCardCapsule } from './PublicationCardCapsule';
import { PublicationCardBody } from './PublicationCardBody';

export const PublicationVectorLinksCard = ({ publication, children, label="" }) => {
    return (
        <PublicationCardCapsule publication={ publication } label={label} >
            <ProxyLink to={"/all/publication/authors/" + publication.id } >authors</ProxyLink><br />
            <ProxyLink to={"/all/publication/subjects/" + publication.id } >subjects</ProxyLink><br />
        </PublicationCardCapsule>        
    )
}

