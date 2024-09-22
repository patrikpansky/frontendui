import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FinancetypeLink } from './FinancetypeLink';

export const FinancetypeCardCapsule = ({ financetype, label="", title, children }) => {
    const _title = title?title:<FinancetypeLink financetype={ financetype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

