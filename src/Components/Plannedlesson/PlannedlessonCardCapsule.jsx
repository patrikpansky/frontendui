import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { PlannedlessonLink } from './PlannedlessonLink';

export const PlannedlessonCardCapsule = ({ plannedlesson, label="", title, children }) => {
    const _title = title?title:<PlannedlessonLink plannedlesson={ plannedlesson } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

