import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PublicationauthorCardCapsule } from './PublicationauthorCardCapsule';
import { PublicationauthorCardBody } from './PublicationauthorCardBody';

export const PublicationauthorVectorLinksCard = ({ publicationauthor, children, label="" }) => {
    return (
        <PublicationauthorCardCapsule publicationauthor={ publicationauthor } label={label} >
        </PublicationauthorCardCapsule>        
    )
}

