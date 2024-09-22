import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ProjectcategoryLink } from './ProjectcategoryLink';

export const ProjectcategoryCardCapsule = ({ projectcategory, label="", title, children }) => {
    const _title = title?title:<ProjectcategoryLink projectcategory={ projectcategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

