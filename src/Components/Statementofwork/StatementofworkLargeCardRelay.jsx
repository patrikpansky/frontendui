// import {graphql} from 'graphql'
import { StatementofworkMediumCardRelay } from './UserMediumCardRelay';
import { StatementofworkLargeCardLayout } from './StatementofworkLargeCardLayout';

export const StatementofworkLargeCardRelay = ({ statementofwork, children}) => {
    return (
        <StatementofworkLargeCardLayout statementofwork={ statementofwork } grandchildren={children}>
            <StatementofworkMediumCardRelay statementofwork={ statementofwork } />
        </StatementofworkLargeCardLayout>
    )
}

