// import {graphql} from 'graphql'
import { FinancetypeMediumCardRelay } from './UserMediumCardRelay';
import { FinancetypeLargeCardLayout } from './FinancetypeLargeCardLayout';

export const FinancetypeLargeCardRelay = ({ financetype, children}) => {
    return (
        <FinancetypeLargeCardLayout financetype={ financetype } grandchildren={children}>
            <FinancetypeMediumCardRelay financetype={ financetype } />
        </FinancetypeLargeCardLayout>
    )
}

