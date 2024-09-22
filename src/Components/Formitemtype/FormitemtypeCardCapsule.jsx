import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormitemtypeLink } from './FormitemtypeLink';

export const FormitemtypeCardCapsule = ({ formitemtype, label="", title, children }) => {
    const _title = title?title:<FormitemtypeLink formitemtype={ formitemtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

