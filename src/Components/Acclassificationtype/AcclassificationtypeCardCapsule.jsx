import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcclassificationtypeLink } from './AcclassificationtypeLink';

export const AcclassificationtypeCardCapsule = ({ acclassificationtype, label="", title, children }) => {
    const _title = title?title:<AcclassificationtypeLink acclassificationtype={ acclassificationtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

