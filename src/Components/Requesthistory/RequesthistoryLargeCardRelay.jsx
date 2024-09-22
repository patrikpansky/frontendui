// import {graphql} from 'graphql'
import { RequesthistoryMediumCardRelay } from './UserMediumCardRelay';
import { RequesthistoryLargeCardLayout } from './RequesthistoryLargeCardLayout';

export const RequesthistoryLargeCardRelay = ({ requesthistory, children}) => {
    return (
        <RequesthistoryLargeCardLayout requesthistory={ requesthistory } grandchildren={children}>
            <RequesthistoryMediumCardRelay requesthistory={ requesthistory } />
        </RequesthistoryLargeCardLayout>
    )
}

