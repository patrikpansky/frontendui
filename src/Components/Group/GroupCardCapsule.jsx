import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupLink } from './GroupLink';

export const GroupCardCapsule = ({ group, label="", title, children }) => {
    const _title = title?title:<GroupLink group={ group } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

