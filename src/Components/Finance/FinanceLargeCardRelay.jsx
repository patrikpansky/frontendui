// import {graphql} from 'graphql'
import { FinanceMediumCardRelay } from './UserMediumCardRelay';
import { FinanceLargeCardLayout } from './FinanceLargeCardLayout';

export const FinanceLargeCardRelay = ({ finance, children}) => {
    return (
        <FinanceLargeCardLayout finance={ finance } grandchildren={children}>
            <FinanceMediumCardRelay finance={ finance } />
        </FinanceLargeCardLayout>
    )
}

