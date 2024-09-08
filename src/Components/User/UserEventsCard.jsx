import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { UserEventsCalendarLazy } from './UserEventsCalendarLazy'

export const UserEventsCard = ({user}) => {
    // const memberships = user?.memberships || []
    // const user_ids = memberships.map(m => m?.user?.id)
    const where = {"presences": {"user_id": {"_eq": user?.id}}}
    return (
        <CardCapsule title="Rozvrh">
            <UserEventsCalendarLazy user={user} where={where} />
        </CardCapsule>
    )
}