import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { GroupLink } from './GroupLink'
import { PeopleFill } from 'react-bootstrap-icons'
import { GroupMediumContent } from './GroupMediumContent'
import { GroupCardCapsule } from './GroupCardCapsule'

export const GroupMediumCard = ({group, children}) => {
    return (
        <GroupCardCapsule group={group}>
            <GroupMediumContent group={group} />
            {children}
        </GroupCardCapsule>
    )
}