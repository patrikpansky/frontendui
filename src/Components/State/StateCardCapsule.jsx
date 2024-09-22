import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { StateLink } from './StateLink';

export const StateCardCapsule = ({ state, label="", title, children }) => {
    const _title = title?title:<StateLink state={ state } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

