// import {graphql} from 'graphql'
import { GroupconnectionMediumCardRelay } from './UserMediumCardRelay';
import { GroupconnectionLargeCardLayout } from './GroupconnectionLargeCardLayout';

export const GroupconnectionLargeCardRelay = ({ groupconnection, children}) => {
    return (
        <GroupconnectionLargeCardLayout groupconnection={ groupconnection } grandchildren={children}>
            <GroupconnectionMediumCardRelay groupconnection={ groupconnection } />
        </GroupconnectionLargeCardLayout>
    )
}

