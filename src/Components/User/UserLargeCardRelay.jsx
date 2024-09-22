// import {graphql} from 'graphql'
import { UserMediumCardRelay } from './UserMediumCardRelay';
import { UserLargeCardLayout } from './UserLargeCardLayout';

export const UserLargeCardRelay = ({ user, children}) => {
    return (
        <UserLargeCardLayout user={ user } grandchildren={children}>
            <UserMediumCardRelay user={ user } />
        </UserLargeCardLayout>
    )
}

