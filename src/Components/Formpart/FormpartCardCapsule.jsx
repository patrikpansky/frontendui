import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormpartLink } from './FormpartLink';

export const FormpartCardCapsule = ({ formpart, label="", title, children }) => {
    const _title = title?title:<FormpartLink formpart={ formpart } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

