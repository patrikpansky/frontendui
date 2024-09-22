import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramstudentLink } from './AcprogramstudentLink';

export const AcprogramstudentCardCapsule = ({ acprogramstudent, label="", title, children }) => {
    const _title = title?title:<AcprogramstudentLink acprogramstudent={ acprogramstudent } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

