import { useDispatch } from "react-redux"
import { EventAsyncActions } from "../../Queries/_events"
import { useEffect, useState } from "react"
import { GroupAsyncActions } from "../../Queries/_groups"
import { UserLink } from "../User/UserLink"
import { GroupLink } from "../Group/GroupLink"

const EventsOverlap = (eventA, eventB) => {
    if ((eventA._startdate <= eventB._startdate) & (eventB._startdate <= eventA._enddate)) {
        return true
    }
    if ((eventB._startdate <= eventA._startdate) & (eventA._startdate <= eventB._enddate)) {
        return true
    }
    return false
}
const RowCalendar = ({events}) => {
    
    const sortedevents = events.toSorted(
        (eventA, eventB) => (eventA._milliseconds - eventB._milliseconds)
    )
    // return (<>{JSON.stringify(typeof sortedevents[0]._startdate)}{JSON.stringify(sortedevents)}</>)
    for(const event of sortedevents) {
        event._dayminutes = event._startdate.getHours() * 60 + event._startdate.getMinutes()
        event._dayminutes2 = event._enddate.getHours() * 60 + event._enddate.getMinutes()
        event._left = event._dayminutes - 7 * 60
        event._duration = event._dayminutes2 - event._dayminutes
        event.starttime = event.startdate?.substring(11, 16)
        event.endtime = event.enddate?.substring(11, 16)
    }
    let currentleft = 0
    const width = (18 - 7) * 60
    const elements = []
    for(const event of sortedevents) {
        const eventwidth = event._duration / width * 100
        if (currentleft < event._left) {
            const dummywidth = (event._left - currentleft) / width * 100
            elements.push(
                <div key={currentleft} style={{width: `${dummywidth}%`}} />
            )            
        }
        elements.push(
            <div key={event.id} style={{width: `${eventwidth}%`, backgroundColor: "rgb(0,100,0, 0.3)", border:"solid 1px rgb(0,100,0, 0.5)"}}>
                {event.name}<br />
                {event?.starttime} - {event?.endtime}<br />
                {event?.placeId}<br />
                {event?.users.map(
                    (user, index) => index === 0?<UserLink key={user.id} user={user} menu={false} />:""
                )}<br />
                {event?.groups.map(
                    (group, index) => <GroupLink key={group.id} group={group} menu={false} />
                )}
            </div>        
        )
        currentleft = event._left + event._duration
    }
    // return (<>{JSON.stringify(events)}</>)
    return (<>{elements}</>)
}

const DayCalendar = ({day, events}) => {
    const rows = events.map(event => new Array())
    for(const event of events) {
        let breakit = false
        let finalrow = null
        for(const row of rows) {
            finalrow = row
            breakit = true
            for(const rowevent of row) {
                if (EventsOverlap(event, rowevent)) {
                    breakit = false
                    break
                }
            }
            if (breakit) {
                break
            }
            finalrow = null
        }
        finalrow.push(event)
    }
    const nonemptyrows = rows.filter(
        row => row.length > 0
    )
    const daydate = new Date(day)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };
      
    // return (<>{JSON.stringify(nonemptyrows)}</>)
    return (
        <div className="row">
            <div className="col col-2" style={{border: "solid 1px grey"}}>
                {daydate.toLocaleDateString(undefined, options)}
            </div>           
            <div className="col col-10" style={{border: "solid 1px grey"}}>
                <div className="d-flex">
                    {nonemptyrows.map(
                        (events, i) => <RowCalendar key={i} events={events} />
                    )}
                </div>
            </div>
        </div>        
    )
}

export const EventsCalendar = ({events}) => {
    const events_ = events.map(event => (
        {...event, 
            _startdate: new Date(Date.parse(event["startdate"])),
            _milliseconds: Date.parse(event["startdate"]),
            _enddate: new Date(Date.parse(event["enddate"])),
            day: event["startdate"].substring(0, 10)
        })
    )
    // console.log(events_)
    const eventindex = {}
    for(const event of events_) {
        const day = event.day
        let collection = []
        if (day in eventindex) {
            collection = eventindex[day]
        } else {
            eventindex[day] = collection
        }
        collection.push(event)
    }

    const result = Object.entries(eventindex).map(
        ([day, events]) => <DayCalendar key={day} day={day} events={events} />
    )
    return (<>{result}</>)
    // return (<>{JSON.stringify(eventindex)}</>)
}

export const EventsCalendarLazy_ = ({where}) => {
    const dispatch = useDispatch()
    const [events, setEvents] = useState([])
    const [skip, setSkip] = useState(0)
    const onMore = () => {
        setSkip((old) => old + 12)
    }
    useEffect(
        () => {
            // dispatch(EventAsyncActions.readpage({where, order: "startdate", limit: 12, skip})).
            dispatch(EventAsyncActions.readpage({where, order: "startdate", limit: 12, skip})).
            then(json => {
                const readedevents = json?.data?.result || []
                if (skip === 0) {
                    setEvents(readedevents)
                } else {
                    setEvents([...events, ...readedevents])
                }
                    
            })
        }, [skip] // dispatch, where, setEvents
    )
    return (
        <>
            <EventsCalendar events={events} />
            <br />
            <button className="form-control btn btn-outline-success" onClick={onMore}>Načíst další</button>
        </>
    )
}

export const GroupEventsCalendarLazy = ({group}) => {
    const dispatch = useDispatch()
    const [events, setEvents] = useState([])
    const [skip, setSkip] = useState(0)
    const onMore = () => {
        setSkip((old) => old + 12)
    }
    useEffect(
        () => {
            // dispatch(EventAsyncActions.readpage({where, order: "startdate", limit: 12, skip})).
            dispatch(GroupAsyncActions.readevents({where, order: "startdate", limit: 12, skip})).
            then(json => {
                const readedevents = json?.data?.result || []
                if (skip === 0) {
                    setEvents(readedevents)
                } else {
                    setEvents([...events, ...readedevents])
                }
                    
            })
        }, [skip] // dispatch, where, setEvents
    )
    return (
        <>
            <EventsCalendar events={events} />
            <br />
            <button className="form-control btn btn-outline-success" onClick={onMore}>Načíst další</button>
        </>
    )
}