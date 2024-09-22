import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramleveltypeLink } from './AcprogramleveltypeLink';

export const AcprogramleveltypeCardCapsule = ({ acprogramleveltype, label="", title, children }) => {
    const _title = title?title:<AcprogramleveltypeLink acprogramleveltype={ acprogramleveltype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

