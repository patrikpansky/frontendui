// import {graphql} from 'graphql'
import { PublicationMediumCardRelay } from './UserMediumCardRelay';
import { PublicationLargeCardLayout } from './PublicationLargeCardLayout';

export const PublicationLargeCardRelay = ({ publication, children}) => {
    return (
        <PublicationLargeCardLayout publication={ publication } grandchildren={children}>
            <PublicationMediumCardRelay publication={ publication } />
        </PublicationLargeCardLayout>
    )
}

