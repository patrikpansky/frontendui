// import {graphql} from 'graphql'
import { StateMediumCardRelay } from './UserMediumCardRelay';
import { StateLargeCardLayout } from './StateLargeCardLayout';

export const StateLargeCardRelay = ({ state, children}) => {
    return (
        <StateLargeCardLayout state={ state } grandchildren={children}>
            <StateMediumCardRelay state={ state } />
        </StateLargeCardLayout>
    )
}

