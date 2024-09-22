import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcsubjectLink } from './AcsubjectLink';

export const AcsubjectCardCapsule = ({ acsubject, label="", title, children }) => {
    const _title = title?title:<AcsubjectLink acsubject={ acsubject } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

