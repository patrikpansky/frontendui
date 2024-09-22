// import {graphql} from 'graphql'
import { PlanMediumCardRelay } from './UserMediumCardRelay';
import { PlanLargeCardLayout } from './PlanLargeCardLayout';

export const PlanLargeCardRelay = ({ plan, children}) => {
    return (
        <PlanLargeCardLayout plan={ plan } grandchildren={children}>
            <PlanMediumCardRelay plan={ plan } />
        </PlanLargeCardLayout>
    )
}

