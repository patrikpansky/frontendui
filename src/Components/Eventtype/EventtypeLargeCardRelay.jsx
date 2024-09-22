// import {graphql} from 'graphql'
import { EventtypeMediumCardRelay } from './UserMediumCardRelay';
import { EventtypeLargeCardLayout } from './EventtypeLargeCardLayout';

export const EventtypeLargeCardRelay = ({ eventtype, children}) => {
    return (
        <EventtypeLargeCardLayout eventtype={ eventtype } grandchildren={children}>
            <EventtypeMediumCardRelay eventtype={ eventtype } />
        </EventtypeLargeCardLayout>
    )
}

