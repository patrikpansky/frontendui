import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramstudentstateLink } from './AcprogramstudentstateLink';

export const AcprogramstudentstateCardCapsule = ({ acprogramstudentstate, label="", title, children }) => {
    const _title = title?title:<AcprogramstudentstateLink acprogramstudentstate={ acprogramstudentstate } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

