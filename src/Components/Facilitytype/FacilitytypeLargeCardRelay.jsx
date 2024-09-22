// import {graphql} from 'graphql'
import { FacilitytypeMediumCardRelay } from './UserMediumCardRelay';
import { FacilitytypeLargeCardLayout } from './FacilitytypeLargeCardLayout';

export const FacilitytypeLargeCardRelay = ({ facilitytype, children}) => {
    return (
        <FacilitytypeLargeCardLayout facilitytype={ facilitytype } grandchildren={children}>
            <FacilitytypeMediumCardRelay facilitytype={ facilitytype } />
        </FacilitytypeLargeCardLayout>
    )
}

