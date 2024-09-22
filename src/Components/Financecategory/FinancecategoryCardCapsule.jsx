import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FinancecategoryLink } from './FinancecategoryLink';

export const FinancecategoryCardCapsule = ({ financecategory, label="", title, children }) => {
    const _title = title?title:<FinancecategoryLink financecategory={ financecategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

