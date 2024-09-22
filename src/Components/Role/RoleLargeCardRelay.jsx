// import {graphql} from 'graphql'
import { RoleMediumCardRelay } from './UserMediumCardRelay';
import { RoleLargeCardLayout } from './RoleLargeCardLayout';

export const RoleLargeCardRelay = ({ role, children}) => {
    return (
        <RoleLargeCardLayout role={ role } grandchildren={children}>
            <RoleMediumCardRelay role={ role } />
        </RoleLargeCardLayout>
    )
}

