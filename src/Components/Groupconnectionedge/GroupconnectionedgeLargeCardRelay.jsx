// import {graphql} from 'graphql'
import { GroupconnectionedgeMediumCardRelay } from './UserMediumCardRelay';
import { GroupconnectionedgeLargeCardLayout } from './GroupconnectionedgeLargeCardLayout';

export const GroupconnectionedgeLargeCardRelay = ({ groupconnectionedge, children}) => {
    return (
        <GroupconnectionedgeLargeCardLayout groupconnectionedge={ groupconnectionedge } grandchildren={children}>
            <GroupconnectionedgeMediumCardRelay groupconnectionedge={ groupconnectionedge } />
        </GroupconnectionedgeLargeCardLayout>
    )
}

