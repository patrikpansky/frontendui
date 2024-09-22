import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { UserconnectionLink } from './UserconnectionLink';

export const UserconnectionCardCapsule = ({ userconnection, label="", title, children }) => {
    const _title = title?title:<UserconnectionLink userconnection={ userconnection } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

