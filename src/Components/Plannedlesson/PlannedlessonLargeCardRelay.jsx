// import {graphql} from 'graphql'
import { PlannedlessonMediumCardRelay } from './UserMediumCardRelay';
import { PlannedlessonLargeCardLayout } from './PlannedlessonLargeCardLayout';

export const PlannedlessonLargeCardRelay = ({ plannedlesson, children}) => {
    return (
        <PlannedlessonLargeCardLayout plannedlesson={ plannedlesson } grandchildren={children}>
            <PlannedlessonMediumCardRelay plannedlesson={ plannedlesson } />
        </PlannedlessonLargeCardLayout>
    )
}

