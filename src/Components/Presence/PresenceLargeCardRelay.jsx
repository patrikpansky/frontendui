// import {graphql} from 'graphql'
import { PresenceMediumCardRelay } from './UserMediumCardRelay';
import { PresenceLargeCardLayout } from './PresenceLargeCardLayout';

export const PresenceLargeCardRelay = ({ presence, children}) => {
    return (
        <PresenceLargeCardLayout presence={ presence } grandchildren={children}>
            <PresenceMediumCardRelay presence={ presence } />
        </PresenceLargeCardLayout>
    )
}

