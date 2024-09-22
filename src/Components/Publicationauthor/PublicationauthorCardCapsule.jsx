import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PublicationauthorLink } from './PublicationauthorLink';

export const PublicationauthorCardCapsule = ({ publicationauthor, label="", title, children }) => {
    const _title = title?title:<PublicationauthorLink publicationauthor={ publicationauthor } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

