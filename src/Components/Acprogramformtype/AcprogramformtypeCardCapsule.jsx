import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramformtypeLink } from './AcprogramformtypeLink';

export const AcprogramformtypeCardCapsule = ({ acprogramformtype, label="", title, children }) => {
    const _title = title?title:<AcprogramformtypeLink acprogramformtype={ acprogramformtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

