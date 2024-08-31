import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { GroupAsyncActions } from "../../Queries/_groups"
import { EventsCalendar } from "../Event/EventsCalendar"

export const GroupEventsCalendarLazy = ({group}) => {
    const dispatch = useDispatch()
    // const [events, setEvents] = useState([])
    const events = group?.events || []
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const onMore = () => {
        setLoading(true)
        dispatch(GroupAsyncActions.readevents({id: group?.id, order: "startdate", limit: 12, skip}))
        .then(
            (jsonResult) => {
                const result = jsonResult?.data?.result?.events
                if (result) {
                    if (result.length === 0) {
                        setMore(false)
                    }
                }
                return jsonResult
            }
        )
        .then(() => {
            setLoading(false)
            // setSkip((old) => old + 12)
            setSkip(skip + 12)
        })
    }
    
    useEffect(onMore, [])
    let Component = <span className="form-control btn btn-danger">Více toho není</span>
    if (!loading & more) {
        Component = <button className="form-control btn btn-outline-success" onClick={onMore}>Načíst další</button>
    } else {
        if (loading) {
            Component = <span className="form-control btn btn-danger">Nahrávám</span>
        }
    }
    return (
        <>
            <EventsCalendar events={events} />
            <br />
            {/* {(!loading)?<button className="form-control btn btn-outline-success" onClick={onMore}>Načíst další</button>:<span className="form-control btn btn-danger">Nahrávám</span>} */}
            {Component}
        </>
    )
}