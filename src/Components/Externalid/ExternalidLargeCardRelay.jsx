// import {graphql} from 'graphql'
import { ExternalidMediumCardRelay } from './UserMediumCardRelay';
import { ExternalidLargeCardLayout } from './ExternalidLargeCardLayout';

export const ExternalidLargeCardRelay = ({ externalid, children}) => {
    return (
        <ExternalidLargeCardLayout externalid={ externalid } grandchildren={children}>
            <ExternalidMediumCardRelay externalid={ externalid } />
        </ExternalidLargeCardLayout>
    )
}

