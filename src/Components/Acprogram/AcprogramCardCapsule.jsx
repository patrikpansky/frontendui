import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramLink } from './AcprogramLink';

export const AcprogramCardCapsule = ({ acprogram, label="", title, children }) => {
    const _title = title?title:<AcprogramLink acprogram={ acprogram } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

