import { useDispatch, useSelector } from "react-redux"
import { EventAsyncActions } from "../../Queries/_events"
import { useEffect, useRef, useState } from "react"
import { GroupAsyncActions } from "../../Queries/_groups"
import { UserLink } from "../User/UserLink"
import { GroupLink } from "../Group/GroupLink"
import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared/src";

const EventsOverlap = (eventA, eventB) => {
    return eventA._startdate <= eventB._enddate && eventA._enddate >= eventB._startdate;
};

/**
 * Displays a single row of non-overlapping events, where each event is positioned
 * and sized based on its start time and duration relative to the day.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.events - Array of non-overlapping event objects.
 * @returns {JSX.Element} The rendered row of events.
 */
const RowCalendar = ({ events, showAllUsers=true }) => {
    const startHour = 7; // Start of the calendar day (e.g., 7:00 AM)
    const endHour = 18; // End of the calendar day (e.g., 6:00 PM)
    const calendarWidth = (endHour - startHour) * 60; // Total calendar width in minutes

    const elements = [];
    let currentLeft = 0; // Tracks the current position in minutes

    for (const event of events) {
        // Calculate event properties
        const eventStart = event._startdate.getHours() * 60 + event._startdate.getMinutes();
        const eventEnd = event._enddate.getHours() * 60 + event._enddate.getMinutes();
        const eventLeft = eventStart - startHour * 60; // Position relative to the calendar start
        const eventDuration = eventEnd - eventStart;
        const eventWidth = (eventDuration / calendarWidth) * 100; // Width as a percentage

        // Add gaps for empty spaces
        if (currentLeft < eventLeft) {
            const gapWidth = ((eventLeft - currentLeft) / calendarWidth) * 100;
            elements.push(<div key={`gap-${currentLeft}`} style={{ width: `${gapWidth}%` }} />);
        }

        // Render the event block
        elements.push(
            <div
                key={event.id}
                style={{
                    width: `${eventWidth}%`,
                    backgroundColor: "rgba(0, 100, 0, 0.3)",
                    border: "1px solid rgba(0, 100, 0, 0.5)",
                    padding: "5px",
                }}
            >
                <div>{event.name}</div>
                <div>
                    {event.starttime} - {event.endtime}
                </div>
                <div>{event.placeId}</div>
                <div>
                    <strong>Users:</strong>
                    <div>
                        {showAllUsers
                            ? event.users.map((user) => (
                                  <span key={user.id}>
                                      <UserLink user={user} menu={false} />;&nbsp; 
                                  </span>
                              ))
                            : event.users.length > 0 && (
                                  <div>
                                      <UserLink user={event.users[0]} menu={false} />
                                  </div>
                              )}
                    </div>
                </div>
                <div>
                    <strong>Groups:</strong>
                    <div>
                        {event.groups.map((group) => (
                            <span key={group.id}>
                                <GroupLink group={group} menu={false} />;&nbsp;
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );

        // Update the current position
        currentLeft = eventLeft + eventDuration;
    }

    return <div className="d-flex">{elements}</div>;
};

/**
 * Displays all events for a given day, splitting them into rows of non-overlapping events.
 *
 * @param {Object} props - Component props.
 * @param {string} props.day - The date string (YYYY-MM-DD) representing the day.
 * @param {Array} props.events - Array of event objects for the day.
 * @returns {JSX.Element} The rendered day calendar with rows of events.
 */
const DayCalendar = ({ day, events }) => {
    const [showAllUsers, setShowAllUsers] = useState(true); // State to toggle user display mode

    /**
     * Groups events into rows of non-overlapping events.
     * 
     * @param {Array} events - Array of events to group.
     * @returns {Array<Array>} Array of event rows, where each row is an array of non-overlapping events.
     */
    const groupEventsIntoRows = (events) => {
        const rows = [];

        for (const event of events) {
            let placed = false;

            for (const row of rows) {
                // Check if the event overlaps with any event in the current row
                const overlaps = row.some((rowEvent) => EventsOverlap(event, rowEvent));
                if (!overlaps) {
                    row.push(event);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                rows.push([event]); // Create a new row for overlapping events
            }
        }

        return rows;
    };

    // Group events into rows
    const rows = groupEventsIntoRows(events);

    // Format the day header
    const dayDate = new Date(day);
    const options = { weekday: "long", year: "numeric", month: "numeric", day: "numeric" };
    const dayHeader = dayDate.toLocaleDateString(undefined, options);

    return (
        <div className="row"  // Subtract navbar height
        >
            {/* Left column with the day header */}
            <div className="col col-2" style={{ border: "1px solid grey" }}>
                <div style={{

                        position: "sticky",
                        top: "0", // Sticks to the top of the column
                        backgroundColor: "white",
                        zIndex: 1,
                        padding: "10px",
                        // borderBottom: "1px solid grey",
                    }}
                >
                    {dayHeader}
                    {/* <div style={{ marginTop: "10px" }}>
                        <label>
                            <input
                                type="checkbox"
                                className="form-control"
                                checked={showAllUsers}
                                onChange={(e) => setShowAllUsers(e.target.checked)}
                            />
                            Show All Users
                        </label>

                    </div>                     */}
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={showAllUsers}
                            onChange={(e) => setShowAllUsers(e.target.checked)}
                            id="flexCheckDefault" 
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Všichni učitelé
                        </label>
                    </div>
                </div>
            </div>

            {/* Right column with the event rows */}
            <div className="col col-10" style={{ border: "1px solid grey" }}>
                {rows.map((rowEvents, index) => (
                    <RowCalendar 
                        key={index} 
                        events={rowEvents} 
                        showAllUsers={showAllUsers} // Pass toggle state to RowCalendar
                    />
                ))}
            </div>
        </div>
    );
};



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

const alleventsquery = `
query readevents($skip: Int, $limit: Int, $where: EventInputFilter) {
  result: eventPage(skip: $skip, limit: $limit, orderby: "startdate", where: $where) {
    __typename
    id
    name
    description
    startdate
    enddate
    duration(unit: MINUTES)
    users {
      __typename
      id
      fullname
      email
    }
    groups {
      __typename
      id
      name
    }
  }
}`

/**
 * Wraps the result of CreateAsyncActionFromQuery and adds an additional function call.
 *
 * @param {Function} asyncActionCreator - The async action creator returned by CreateAsyncActionFromQuery.
 * @param {Function} additionalFunction - A function to call during the async action process.
 * @param {string} [hook="after"] - When to call the additional function ("before" or "after").
 * @returns {Function} A new async action creator with the additional function call.
 */
export const WrapAsyncActionWithFunction = (asyncActionCreator, additionalFunction) => {
    if (typeof asyncActionCreator !== "function") {
        throw new Error("WrapAsyncActionWithFunction: asyncActionCreator must be a function.");
    }

    if (typeof additionalFunction !== "function") {
        throw new Error("WrapAsyncActionWithFunction: additionalFunction must be a function.");
    }

    return (query_variables) => async (dispatch, getState) => {
        let result = await asyncActionCreator(query_variables)(dispatch, getState);
        result = additionalFunction(result, dispatch, getState);
        return result;
    };
};

const todayMorning = () => {
    const result = new Date();
    result.setHours(6, 0, 0, 0);
    return result.toISOString()
}

const endOfDayNextWeek = () => {
    const todayMorning = new Date();
    todayMorning.setHours(6, 0, 0, 0);

    const result = new Date(todayMorning);
    result.setDate(result.getDate() + 7); // Move to the same time next week
    result.setHours(23, 59, 59, 999); // Set to the end of that day
    return result.toISOString().substring(0, 19)
}

const EventPageAsyncAction = WrapAsyncActionWithFunction(CreateAsyncActionFromQuery(alleventsquery), (jsonresult => jsonresult?.data?.result))

/**
 * Adjusts infiniteProps by updating its `where` filter:
 * - Sets `startdate` to the current `enddate`.
 * - Sets `enddate` to 7 days (7 * 24 hours) after the current `enddate`.
 *
 * @param {Object} infiniteProps - The infiniteProps object to modify.
 * @returns {Object} A new infiniteProps object with adjusted where filter.
 */
const adjustInfiniteProps = (infiniteProps) => {
    const { where, ...rest } = infiniteProps;

    // Extract the current enddate dynamically
    const enddateCondition = where._and.find(item => Object.keys(item)[0] === "enddate");
    const originalEnddate = new Date(enddateCondition.enddate._le);

    // Calculate the new startdate and enddate
    // const newStartdate = originalEnddate.toISOString();
    const newEnddate = new Date(originalEnddate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();

    // Return a new infiniteProps object with updated where filter
    return {
        ...rest,
        where: {
            _and: [
                { startdate: { _gt: enddateCondition.enddate._le } },
                { enddate: { _le: newEnddate.substring(0, 19) } }
            ]
        }
    };
};

const EventsVisualiser = ({items=[]}) => <EventsCalendar events={items} />
export const EventsInfinityComponent = ({
    // startdate = todayMorning(), 
    startdate = "2023-09-01T01:00:00", 
    enddate = endOfDayNextWeek(), 
    ...props
}) => {
    const infiniteProps = {
        skip: 0,
        limit: 1000,
        ...props,
        where: {
            _and: [ 
                {startdate: {_gt: startdate}},
                {enddate: {_le: enddate}}
            ]
        }
    }

    return (
        <InfiniteScroll actionParams={infiniteProps} asyncAction={EventPageAsyncAction} Visualiser={EventsVisualiser} calculateNewFilter={adjustInfiniteProps}/>
    )
}