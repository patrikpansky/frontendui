import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { GroupEventsCalendarLazy } from './GroupEventsCalendarLazy'
import { EventsCalendarLazy_ } from '../Event/EventsCalendar'

export const GroupEventsCard = ({group}) => {
    const memberships = group?.memberships || []
    const user_ids = memberships.map(m => m?.user?.id)
    const where = {"groups": {"group_id": {"_eq": group?.id}}}
    return (
        <CardCapsule title="Rozvrh">
            <GroupEventsCalendarLazy group={group} where={where} />
            {/* <EventsCalendarLazy_ where={where} /> */}
        </CardCapsule>
    )
}