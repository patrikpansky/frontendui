import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramtypeLink } from './AcprogramtypeLink';

export const AcprogramtypeCardCapsule = ({ acprogramtype, label="", title, children }) => {
    const _title = title?title:<AcprogramtypeLink acprogramtype={ acprogramtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

