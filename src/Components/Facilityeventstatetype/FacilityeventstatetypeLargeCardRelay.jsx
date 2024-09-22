// import {graphql} from 'graphql'
import { FacilityeventstatetypeMediumCardRelay } from './UserMediumCardRelay';
import { FacilityeventstatetypeLargeCardLayout } from './FacilityeventstatetypeLargeCardLayout';

export const FacilityeventstatetypeLargeCardRelay = ({ facilityeventstatetype, children}) => {
    return (
        <FacilityeventstatetypeLargeCardLayout facilityeventstatetype={ facilityeventstatetype } grandchildren={children}>
            <FacilityeventstatetypeMediumCardRelay facilityeventstatetype={ facilityeventstatetype } />
        </FacilityeventstatetypeLargeCardLayout>
    )
}

