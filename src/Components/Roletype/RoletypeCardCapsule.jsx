import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RoletypeLink } from './RoletypeLink';

export const RoletypeCardCapsule = ({ roletype, label="", title, children }) => {
    const _title = title?title:<RoletypeLink roletype={ roletype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

