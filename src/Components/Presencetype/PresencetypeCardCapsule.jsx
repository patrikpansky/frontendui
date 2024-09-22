import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PresencetypeLink } from './PresencetypeLink';

export const PresencetypeCardCapsule = ({ presencetype, label="", title, children }) => {
    const _title = title?title:<PresencetypeLink presencetype={ presencetype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

