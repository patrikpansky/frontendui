// import {graphql} from 'graphql'
import { PublicationauthorMediumCardRelay } from './UserMediumCardRelay';
import { PublicationauthorLargeCardLayout } from './PublicationauthorLargeCardLayout';

export const PublicationauthorLargeCardRelay = ({ publicationauthor, children}) => {
    return (
        <PublicationauthorLargeCardLayout publicationauthor={ publicationauthor } grandchildren={children}>
            <PublicationauthorMediumCardRelay publicationauthor={ publicationauthor } />
        </PublicationauthorLargeCardLayout>
    )
}

