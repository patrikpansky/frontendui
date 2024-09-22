import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RequesthistoryLink } from './RequesthistoryLink';

export const RequesthistoryCardCapsule = ({ requesthistory, label="", title, children }) => {
    const _title = title?title:<RequesthistoryLink requesthistory={ requesthistory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

