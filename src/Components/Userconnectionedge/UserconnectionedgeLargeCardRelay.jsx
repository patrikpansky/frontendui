// import {graphql} from 'graphql'
import { UserconnectionedgeMediumCardRelay } from './UserMediumCardRelay';
import { UserconnectionedgeLargeCardLayout } from './UserconnectionedgeLargeCardLayout';

export const UserconnectionedgeLargeCardRelay = ({ userconnectionedge, children}) => {
    return (
        <UserconnectionedgeLargeCardLayout userconnectionedge={ userconnectionedge } grandchildren={children}>
            <UserconnectionedgeMediumCardRelay userconnectionedge={ userconnectionedge } />
        </UserconnectionedgeLargeCardLayout>
    )
}

