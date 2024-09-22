// import {graphql} from 'graphql'
import { ExternalidcategoryMediumCardRelay } from './UserMediumCardRelay';
import { ExternalidcategoryLargeCardLayout } from './ExternalidcategoryLargeCardLayout';

export const ExternalidcategoryLargeCardRelay = ({ externalidcategory, children}) => {
    return (
        <ExternalidcategoryLargeCardLayout externalidcategory={ externalidcategory } grandchildren={children}>
            <ExternalidcategoryMediumCardRelay externalidcategory={ externalidcategory } />
        </ExternalidcategoryLargeCardLayout>
    )
}

