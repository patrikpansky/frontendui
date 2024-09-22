import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ActopicLink } from './ActopicLink';

export const ActopicCardCapsule = ({ actopic, label="", title, children }) => {
    const _title = title?title:<ActopicLink actopic={ actopic } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

