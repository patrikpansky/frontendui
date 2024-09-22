import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormLink } from './FormLink';

export const FormCardCapsule = ({ form, label="", title, children }) => {
    const _title = title?title:<FormLink form={ form } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

