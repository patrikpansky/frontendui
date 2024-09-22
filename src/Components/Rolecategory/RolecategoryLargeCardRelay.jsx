// import {graphql} from 'graphql'
import { RolecategoryMediumCardRelay } from './UserMediumCardRelay';
import { RolecategoryLargeCardLayout } from './RolecategoryLargeCardLayout';

export const RolecategoryLargeCardRelay = ({ rolecategory, children}) => {
    return (
        <RolecategoryLargeCardLayout rolecategory={ rolecategory } grandchildren={children}>
            <RolecategoryMediumCardRelay rolecategory={ rolecategory } />
        </RolecategoryLargeCardLayout>
    )
}

