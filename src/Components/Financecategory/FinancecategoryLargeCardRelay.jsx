// import {graphql} from 'graphql'
import { FinancecategoryMediumCardRelay } from './UserMediumCardRelay';
import { FinancecategoryLargeCardLayout } from './FinancecategoryLargeCardLayout';

export const FinancecategoryLargeCardRelay = ({ financecategory, children}) => {
    return (
        <FinancecategoryLargeCardLayout financecategory={ financecategory } grandchildren={children}>
            <FinancecategoryMediumCardRelay financecategory={ financecategory } />
        </FinancecategoryLargeCardLayout>
    )
}

