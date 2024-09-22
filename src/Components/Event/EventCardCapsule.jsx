import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { EventLink } from './EventLink';

export const EventCardCapsule = ({ event, label="", title, children }) => {
    const _title = title?title:<EventLink event={ event } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

