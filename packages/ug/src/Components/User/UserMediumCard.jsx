import { CardCapsule } from '@hrbolek/uoisfrontend-shared'

import { UserMediumContent } from './UserMediumContent'
import { UserCardCapsule } from './UserCardCapsule'

export const UserMediumCard = ({user, children}) => {
    return (
        <UserCardCapsule user={user } >
            <UserMediumContent user={user} />
            {children}
        </UserCardCapsule>
    )
}