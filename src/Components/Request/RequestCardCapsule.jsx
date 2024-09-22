import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RequestLink } from './RequestLink';

export const RequestCardCapsule = ({ request, label="", title, children }) => {
    const _title = title?title:<RequestLink request={ request } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

