import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { infoLink } from './infoLink';

export const infoCardCapsule = ({ pageinfo, label="", title, children }) => {
    const _title = title?title:<infoLink pageinfo={ pageinfo } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

