import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { RoletypelistLink } from './RoletypelistLink';

export const RoletypelistCardCapsule = ({ roletypelist, label="", title, children }) => {
    const _title = title?title:<RoletypelistLink roletypelist={ roletypelist } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

