import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { GroupAsyncActions } from "../../Queries/_groups"
import { EventsCalendar } from "../Event/EventsCalendar"

export const GroupEventsCalendarLazy = ({group}) => {
    const dispatch = useDispatch()
    // const [events, setEvents] = useState([])
    const events = group?.events || []
    const [skip, setSkip] = useState(0)
    const onMore = () => {
        setSkip((old) => old + 12)
        dispatch(GroupAsyncActions.readevents({id: group?.id, order: "startdate", limit: 12, skip}))
    }
    // useEffect(
    //     () => {
    //         // dispatch(EventAsyncActions.readpage({where, order: "startdate", limit: 12, skip})).
    //         dispatch(GroupAsyncActions.readevents({id: group?.id, order: "startdate", limit: 12, skip})).
    //         then(json => {
    //             const readedevents = json?.data?.result || []
    //             if (skip === 0) {
    //                 setEvents(readedevents)
    //             } else {
    //                 setEvents([...events, ...readedevents])
    //             }
                    
    //         })
    //     }, [skip] // dispatch, where, setEvents
    // )
    return (
        <>
            <EventsCalendar events={events} />
            <br />
            <button className="form-control btn btn-outline-success" onClick={onMore}>Načíst další</button>
        </>
    )
}