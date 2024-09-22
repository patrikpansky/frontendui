import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { UserLink } from './UserLink';
import { PersonFill } from 'react-bootstrap-icons';

export const UserCardCapsule = ({ user, label="", title, children }) => {
    const _title = title?title:<UserLink user={ user } />
    return (
        <CardCapsule  title={<><PersonFill /> {label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

