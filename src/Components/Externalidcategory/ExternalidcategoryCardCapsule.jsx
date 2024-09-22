import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ExternalidcategoryLink } from './ExternalidcategoryLink';

export const ExternalidcategoryCardCapsule = ({ externalidcategory, label="", title, children }) => {
    const _title = title?title:<ExternalidcategoryLink externalidcategory={ externalidcategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

