import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RbacobjectLink } from './RbacobjectLink';

export const RbacobjectCardCapsule = ({ rbacobject, label="", title, children }) => {
    const _title = title?title:<RbacobjectLink rbacobject={ rbacobject } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

