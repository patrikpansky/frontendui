import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { EventtypeLink } from './EventtypeLink';

export const EventtypeCardCapsule = ({ eventtype, label="", title, children }) => {
    const _title = title?title:<EventtypeLink eventtype={ eventtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

