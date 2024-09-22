import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PublicationLink } from './PublicationLink';

export const PublicationCardCapsule = ({ publication, label="", title, children }) => {
    const _title = title?title:<PublicationLink publication={ publication } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

