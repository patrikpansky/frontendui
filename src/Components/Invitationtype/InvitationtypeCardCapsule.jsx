import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { InvitationtypeLink } from './InvitationtypeLink';

export const InvitationtypeCardCapsule = ({ invitationtype, label="", title, children }) => {
    const _title = title?title:<InvitationtypeLink invitationtype={ invitationtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

