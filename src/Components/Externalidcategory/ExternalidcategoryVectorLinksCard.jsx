import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ExternalidcategoryCardCapsule } from './ExternalidcategoryCardCapsule';
import { ExternalidcategoryCardBody } from './ExternalidcategoryCardBody';

export const ExternalidcategoryVectorLinksCard = ({ externalidcategory, children, label="" }) => {
    return (
        <ExternalidcategoryCardCapsule externalidcategory={ externalidcategory } label={label} >
        </ExternalidcategoryCardCapsule>        
    )
}

