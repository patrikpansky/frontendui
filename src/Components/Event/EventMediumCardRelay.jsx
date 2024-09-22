// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { EventMediumCard } from './EventMediumCard';

const EventMediumCardRelayFragment = graphql`fragment EventMediumCardRelayFragment on EventGQLModel {
    id
    name
    nameen
    lastchange
    created
    duration
    description
    place
    placeid
    startdate
    enddate
}`

export const EventMediumCardRelay = ({ event, children }) => {
    const event_ = useFragment(EventMediumCardRelayFragment, event);
    return (
        <EventMediumCard event = { event_ }>
            {children}
        </EventMediumCard>
    )
}

