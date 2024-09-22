import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PlanLink } from './PlanLink';

export const PlanCardCapsule = ({ plan, label="", title, children }) => {
    const _title = title?title:<PlanLink plan={ plan } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

