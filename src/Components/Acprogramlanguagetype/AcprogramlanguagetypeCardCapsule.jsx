import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramlanguagetypeLink } from './AcprogramlanguagetypeLink';

export const AcprogramlanguagetypeCardCapsule = ({ acprogramlanguagetype, label="", title, children }) => {
    const _title = title?title:<AcprogramlanguagetypeLink acprogramlanguagetype={ acprogramlanguagetype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

