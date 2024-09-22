import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupconnectionLink } from './GroupconnectionLink';

export const GroupconnectionCardCapsule = ({ groupconnection, label="", title, children }) => {
    const _title = title?title:<GroupconnectionLink groupconnection={ groupconnection } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

