// import {graphql} from 'graphql'
import { EventMediumCardRelay } from './UserMediumCardRelay';
import { EventLargeCardLayout } from './EventLargeCardLayout';

export const EventLargeCardRelay = ({ event, children}) => {
    return (
        <EventLargeCardLayout event={ event } grandchildren={children}>
            <EventMediumCardRelay event={ event } />
        </EventLargeCardLayout>
    )
}

