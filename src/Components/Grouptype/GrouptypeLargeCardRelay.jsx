// import {graphql} from 'graphql'
import { GrouptypeMediumCardRelay } from './UserMediumCardRelay';
import { GrouptypeLargeCardLayout } from './GrouptypeLargeCardLayout';

export const GrouptypeLargeCardRelay = ({ grouptype, children}) => {
    return (
        <GrouptypeLargeCardLayout grouptype={ grouptype } grandchildren={children}>
            <GrouptypeMediumCardRelay grouptype={ grouptype } />
        </GrouptypeLargeCardLayout>
    )
}

