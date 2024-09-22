// import {graphql} from 'graphql'
import { PublicationtypeMediumCardRelay } from './UserMediumCardRelay';
import { PublicationtypeLargeCardLayout } from './PublicationtypeLargeCardLayout';

export const PublicationtypeLargeCardRelay = ({ publicationtype, children}) => {
    return (
        <PublicationtypeLargeCardLayout publicationtype={ publicationtype } grandchildren={children}>
            <PublicationtypeMediumCardRelay publicationtype={ publicationtype } />
        </PublicationtypeLargeCardLayout>
    )
}

