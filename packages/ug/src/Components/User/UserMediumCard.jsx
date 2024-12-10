import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { UserLink } from './UserLink'
import { PersonFill } from 'react-bootstrap-icons'
import { UserMediumContent } from './UserMediumContent'

export const UserMediumCard = ({user, children}) => {
    return (
        <CardCapsule title={<><PersonFill /> <UserLink user={user } /></>}>
            <UserMediumContent user={user} />
            {children}
        </CardCapsule>
    )
}