// import {graphql} from 'graphql'
import { GroupMediumCardRelay } from './UserMediumCardRelay';
import { GroupLargeCardLayout } from './GroupLargeCardLayout';

export const GroupLargeCardRelay = ({ group, children}) => {
    return (
        <GroupLargeCardLayout group={ group } grandchildren={children}>
            <GroupMediumCardRelay group={ group } />
        </GroupLargeCardLayout>
    )
}

