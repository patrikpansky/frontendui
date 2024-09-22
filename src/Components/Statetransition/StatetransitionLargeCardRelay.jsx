// import {graphql} from 'graphql'
import { StatetransitionMediumCardRelay } from './UserMediumCardRelay';
import { StatetransitionLargeCardLayout } from './StatetransitionLargeCardLayout';

export const StatetransitionLargeCardRelay = ({ statetransition, children}) => {
    return (
        <StatetransitionLargeCardLayout statetransition={ statetransition } grandchildren={children}>
            <StatetransitionMediumCardRelay statetransition={ statetransition } />
        </StatetransitionLargeCardLayout>
    )
}

