import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormtypeLink } from './FormtypeLink';

export const FormtypeCardCapsule = ({ formtype, label="", title, children }) => {
    const _title = title?title:<FormtypeLink formtype={ formtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

