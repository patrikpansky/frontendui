import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AclessonLink } from './AclessonLink';

export const AclessonCardCapsule = ({ aclesson, label="", title, children }) => {
    const _title = title?title:<AclessonLink aclesson={ aclesson } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

