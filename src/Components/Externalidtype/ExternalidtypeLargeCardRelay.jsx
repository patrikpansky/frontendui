// import {graphql} from 'graphql'
import { ExternalidtypeMediumCardRelay } from './UserMediumCardRelay';
import { ExternalidtypeLargeCardLayout } from './ExternalidtypeLargeCardLayout';

export const ExternalidtypeLargeCardRelay = ({ externalidtype, children}) => {
    return (
        <ExternalidtypeLargeCardLayout externalidtype={ externalidtype } grandchildren={children}>
            <ExternalidtypeMediumCardRelay externalidtype={ externalidtype } />
        </ExternalidtypeLargeCardLayout>
    )
}

