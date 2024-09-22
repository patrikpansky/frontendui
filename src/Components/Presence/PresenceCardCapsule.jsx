import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PresenceLink } from './PresenceLink';

export const PresenceCardCapsule = ({ presence, label="", title, children }) => {
    const _title = title?title:<PresenceLink presence={ presence } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

