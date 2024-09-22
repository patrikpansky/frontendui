// import {graphql} from 'graphql'
import { FormcategoryMediumCardRelay } from './UserMediumCardRelay';
import { FormcategoryLargeCardLayout } from './FormcategoryLargeCardLayout';

export const FormcategoryLargeCardRelay = ({ formcategory, children}) => {
    return (
        <FormcategoryLargeCardLayout formcategory={ formcategory } grandchildren={children}>
            <FormcategoryMediumCardRelay formcategory={ formcategory } />
        </FormcategoryLargeCardLayout>
    )
}

