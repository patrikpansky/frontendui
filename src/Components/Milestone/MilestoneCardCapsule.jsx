import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { MilestoneLink } from './MilestoneLink';

export const MilestoneCardCapsule = ({ milestone, label="", title, children }) => {
    const _title = title?title:<MilestoneLink milestone={ milestone } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

