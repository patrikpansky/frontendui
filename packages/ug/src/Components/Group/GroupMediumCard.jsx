import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { GroupLink } from './GroupLink'
import { PeopleFill } from 'react-bootstrap-icons'
import { GroupMediumContent } from './GroupMediumContent'

export const GroupMediumCard = ({group, children}) => {
    return (
        <CardCapsule title={<><PeopleFill /> <GroupLink group={group} /></>}>
            <GroupMediumContent group={group} />
            {children}
        </CardCapsule>
    )
}