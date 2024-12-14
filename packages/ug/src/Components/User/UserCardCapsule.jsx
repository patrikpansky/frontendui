import { PersonFill } from 'react-bootstrap-icons'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { UserLink } from './UserLink'

export const UserCardCapsule = ({user, children}) => {
    return (
        <CardCapsule title={<><PersonFill /> <UserLink user={user } /></>}>
            {children}
        </CardCapsule>
    )
}