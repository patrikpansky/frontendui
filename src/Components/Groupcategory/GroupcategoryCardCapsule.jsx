import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupcategoryLink } from './GroupcategoryLink';

export const GroupcategoryCardCapsule = ({ groupcategory, label="", title, children }) => {
    const _title = title?title:<GroupcategoryLink groupcategory={ groupcategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

