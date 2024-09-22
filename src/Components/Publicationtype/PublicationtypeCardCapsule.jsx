import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PublicationtypeLink } from './PublicationtypeLink';

export const PublicationtypeCardCapsule = ({ publicationtype, label="", title, children }) => {
    const _title = title?title:<PublicationtypeLink publicationtype={ publicationtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

