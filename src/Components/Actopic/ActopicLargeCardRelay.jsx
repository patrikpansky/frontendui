// import {graphql} from 'graphql'
import { ActopicMediumCardRelay } from './UserMediumCardRelay';
import { ActopicLargeCardLayout } from './ActopicLargeCardLayout';

export const ActopicLargeCardRelay = ({ actopic, children}) => {
    return (
        <ActopicLargeCardLayout actopic={ actopic } grandchildren={children}>
            <ActopicMediumCardRelay actopic={ actopic } />
        </ActopicLargeCardLayout>
    )
}

