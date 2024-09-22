// import {graphql} from 'graphql'
import { MilestoneMediumCardRelay } from './UserMediumCardRelay';
import { MilestoneLargeCardLayout } from './MilestoneLargeCardLayout';

export const MilestoneLargeCardRelay = ({ milestone, children}) => {
    return (
        <MilestoneLargeCardLayout milestone={ milestone } grandchildren={children}>
            <MilestoneMediumCardRelay milestone={ milestone } />
        </MilestoneLargeCardLayout>
    )
}

