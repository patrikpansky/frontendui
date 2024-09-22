import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RolecategoryLink } from './RolecategoryLink';

export const RolecategoryCardCapsule = ({ rolecategory, label="", title, children }) => {
    const _title = title?title:<RolecategoryLink rolecategory={ rolecategory } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

