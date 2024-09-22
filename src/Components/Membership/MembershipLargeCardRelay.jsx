// import {graphql} from 'graphql'
import { MembershipMediumCardRelay } from './UserMediumCardRelay';
import { MembershipLargeCardLayout } from './MembershipLargeCardLayout';

export const MembershipLargeCardRelay = ({ membership, children}) => {
    return (
        <MembershipLargeCardLayout membership={ membership } grandchildren={children}>
            <MembershipMediumCardRelay membership={ membership } />
        </MembershipLargeCardLayout>
    )
}

