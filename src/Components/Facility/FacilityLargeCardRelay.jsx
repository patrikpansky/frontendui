// import {graphql} from 'graphql'
import { FacilityMediumCardRelay } from './UserMediumCardRelay';
import { FacilityLargeCardLayout } from './FacilityLargeCardLayout';

export const FacilityLargeCardRelay = ({ facility, children}) => {
    return (
        <FacilityLargeCardLayout facility={ facility } grandchildren={children}>
            <FacilityMediumCardRelay facility={ facility } />
        </FacilityLargeCardLayout>
    )
}

