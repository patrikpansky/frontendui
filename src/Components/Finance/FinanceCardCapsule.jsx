import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FinanceLink } from './FinanceLink';

export const FinanceCardCapsule = ({ finance, label="", title, children }) => {
    const _title = title?title:<FinanceLink finance={ finance } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

