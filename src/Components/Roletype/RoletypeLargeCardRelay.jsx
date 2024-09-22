// import {graphql} from 'graphql'
import { RoletypeMediumCardRelay } from './UserMediumCardRelay';
import { RoletypeLargeCardLayout } from './RoletypeLargeCardLayout';

export const RoletypeLargeCardRelay = ({ roletype, children}) => {
    return (
        <RoletypeLargeCardLayout roletype={ roletype } grandchildren={children}>
            <RoletypeMediumCardRelay roletype={ roletype } />
        </RoletypeLargeCardLayout>
    )
}

