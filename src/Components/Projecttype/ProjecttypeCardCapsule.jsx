import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ProjecttypeLink } from './ProjecttypeLink';

export const ProjecttypeCardCapsule = ({ projecttype, label="", title, children }) => {
    const _title = title?title:<ProjecttypeLink projecttype={ projecttype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

