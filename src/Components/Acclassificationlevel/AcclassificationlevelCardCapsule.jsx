import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcclassificationlevelLink } from './AcclassificationlevelLink';

export const AcclassificationlevelCardCapsule = ({ acclassificationlevel, label="", title, children }) => {
    const _title = title?title:<AcclassificationlevelLink acclassificationlevel={ acclassificationlevel } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

