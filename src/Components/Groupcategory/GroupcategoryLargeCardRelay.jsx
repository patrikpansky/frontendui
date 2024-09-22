// import {graphql} from 'graphql'
import { GroupcategoryMediumCardRelay } from './UserMediumCardRelay';
import { GroupcategoryLargeCardLayout } from './GroupcategoryLargeCardLayout';

export const GroupcategoryLargeCardRelay = ({ groupcategory, children}) => {
    return (
        <GroupcategoryLargeCardLayout groupcategory={ groupcategory } grandchildren={children}>
            <GroupcategoryMediumCardRelay groupcategory={ groupcategory } />
        </GroupcategoryLargeCardLayout>
    )
}

