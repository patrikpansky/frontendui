import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormitemcategoryLink } from './FormitemcategoryLink';

export const FormitemcategoryCardCapsule = ({ formitemcategory, label="", title, children }) => {
    const _title = title?title:<FormitemcategoryLink formitemcategory={ formitemcategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

