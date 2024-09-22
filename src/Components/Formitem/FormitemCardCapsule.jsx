import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormitemLink } from './FormitemLink';

export const FormitemCardCapsule = ({ formitem, label="", title, children }) => {
    const _title = title?title:<FormitemLink formitem={ formitem } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

