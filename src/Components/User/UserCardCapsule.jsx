import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { UserLink } from './UserLink';

export const UserCardCapsule = ({ user, label="", title, children }) => {
    const _title = title?title:<UserLink user={ user } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

