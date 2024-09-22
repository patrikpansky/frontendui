import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogrammessageLink } from './AcprogrammessageLink';

export const AcprogrammessageCardCapsule = ({ acprogrammessage, label="", title, children }) => {
    const _title = title?title:<AcprogrammessageLink acprogrammessage={ acprogrammessage } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

