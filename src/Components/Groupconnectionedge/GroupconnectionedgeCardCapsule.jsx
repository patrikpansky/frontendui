import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupconnectionedgeLink } from './GroupconnectionedgeLink';

export const GroupconnectionedgeCardCapsule = ({ groupconnectionedge, label="", title, children }) => {
    const _title = title?title:<GroupconnectionedgeLink groupconnectionedge={ groupconnectionedge } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

