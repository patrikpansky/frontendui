import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcclassificationLink } from './AcclassificationLink';

export const AcclassificationCardCapsule = ({ acclassification, label="", title, children }) => {
    const _title = title?title:<AcclassificationLink acclassification={ acclassification } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

