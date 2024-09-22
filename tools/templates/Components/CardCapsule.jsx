import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { {{Name name}}Link } from './{{Name name}}Link';

export const {{Name name}}CardCapsule = ({ {{name name}}, label="", title, children }) => {
    const _title = title?title:<{{Name name}}Link {{name name}}={ {{name name}} } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

