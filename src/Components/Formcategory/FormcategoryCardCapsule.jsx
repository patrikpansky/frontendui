import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormcategoryLink } from './FormcategoryLink';

export const FormcategoryCardCapsule = ({ formcategory, label="", title, children }) => {
    const _title = title?title:<FormcategoryLink formcategory={ formcategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

