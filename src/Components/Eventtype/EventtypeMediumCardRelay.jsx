// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { EventtypeMediumCard } from './EventtypeMediumCard';

const EventtypeMediumCardRelayFragment = graphql`fragment EventtypeMediumCardRelayFragment on EventtypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const EventtypeMediumCardRelay = ({ eventtype, children }) => {
    const eventtype_ = useFragment(EventtypeMediumCardRelayFragment, eventtype);
    return (
        <EventtypeMediumCard eventtype = { eventtype_ }>
            {children}
        </EventtypeMediumCard>
    )
}

