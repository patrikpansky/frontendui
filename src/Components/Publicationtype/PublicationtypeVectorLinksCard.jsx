import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PublicationtypeCardCapsule } from './PublicationtypeCardCapsule';
import { PublicationtypeCardBody } from './PublicationtypeCardBody';

export const PublicationtypeVectorLinksCard = ({ publicationtype, children, label="" }) => {
    return (
        <PublicationtypeCardCapsule publicationtype={ publicationtype } label={label} >
            <ProxyLink to={"/all/publicationtype/publications/" + publicationtype.id } >publications</ProxyLink><br />
        </PublicationtypeCardCapsule>        
    )
}

