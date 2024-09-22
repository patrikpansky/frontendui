import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GrouptypeLink } from './GrouptypeLink';

export const GrouptypeCardCapsule = ({ grouptype, label="", title, children }) => {
    const _title = title?title:<GrouptypeLink grouptype={ grouptype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

