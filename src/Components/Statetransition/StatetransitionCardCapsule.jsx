import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { StatetransitionLink } from './StatetransitionLink';

export const StatetransitionCardCapsule = ({ statetransition, label="", title, children }) => {
    const _title = title?title:<StatetransitionLink statetransition={ statetransition } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

