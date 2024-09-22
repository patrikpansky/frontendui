import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AclessontypeLink } from './AclessontypeLink';

export const AclessontypeCardCapsule = ({ aclessontype, label="", title, children }) => {
    const _title = title?title:<AclessontypeLink aclessontype={ aclessontype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

