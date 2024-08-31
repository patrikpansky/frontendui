import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { GroupEventsCalendarLazy } from './GroupEventsCalendarLazy'
import { EventsCalendarLazy_ } from '../Event/EventsCalendar'

export const GroupEventsCard = ({group}) => {
    const where = {"groups": {"group_id": {"_eq": group?.id}}}
    return (
        <CardCapsule title="Rozvrh">
            {/* <GroupEventsCalendarLazy where={where} /> */}
            <EventsCalendarLazy_ where={where} />
        </CardCapsule>
    )
}