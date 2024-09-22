import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupLink } from './GroupLink';
import { PeopleFill } from 'react-bootstrap-icons';

export const GroupCardCapsule = ({ group, label="", title, children }) => {
    const _title = title?title:<GroupLink group={ group } />
    return (
        <CardCapsule  title={<><PeopleFill/> {label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

