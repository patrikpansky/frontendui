import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { UserconnectionedgeLink } from './UserconnectionedgeLink';

export const UserconnectionedgeCardCapsule = ({ userconnectionedge, label="", title, children }) => {
    const _title = title?title:<UserconnectionedgeLink userconnectionedge={ userconnectionedge } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

