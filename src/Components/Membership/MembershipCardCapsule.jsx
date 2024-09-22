import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { MembershipLink } from './MembershipLink';

export const MembershipCardCapsule = ({ membership, label="", title, children }) => {
    const _title = title?title:<MembershipLink membership={ membership } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

