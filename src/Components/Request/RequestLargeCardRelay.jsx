// import {graphql} from 'graphql'
import { RequestMediumCardRelay } from './UserMediumCardRelay';
import { RequestLargeCardLayout } from './RequestLargeCardLayout';

export const RequestLargeCardRelay = ({ request, children}) => {
    return (
        <RequestLargeCardLayout request={ request } grandchildren={children}>
            <RequestMediumCardRelay request={ request } />
        </RequestLargeCardLayout>
    )
}

