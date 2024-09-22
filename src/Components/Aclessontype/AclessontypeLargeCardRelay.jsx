// import {graphql} from 'graphql'
import { AclessontypeMediumCardRelay } from './UserMediumCardRelay';
import { AclessontypeLargeCardLayout } from './AclessontypeLargeCardLayout';

export const AclessontypeLargeCardRelay = ({ aclessontype, children}) => {
    return (
        <AclessontypeLargeCardLayout aclessontype={ aclessontype } grandchildren={children}>
            <AclessontypeMediumCardRelay aclessontype={ aclessontype } />
        </AclessontypeLargeCardLayout>
    )
}

