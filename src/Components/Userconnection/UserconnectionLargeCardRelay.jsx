// import {graphql} from 'graphql'
import { UserconnectionMediumCardRelay } from './UserMediumCardRelay';
import { UserconnectionLargeCardLayout } from './UserconnectionLargeCardLayout';

export const UserconnectionLargeCardRelay = ({ userconnection, children}) => {
    return (
        <UserconnectionLargeCardLayout userconnection={ userconnection } grandchildren={children}>
            <UserconnectionMediumCardRelay userconnection={ userconnection } />
        </UserconnectionLargeCardLayout>
    )
}

