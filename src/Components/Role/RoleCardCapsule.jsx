import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RoleLink } from './RoleLink';

export const RoleCardCapsule = ({ role, label="", title, children }) => {
    const _title = title?title:<RoleLink role={ role } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

