// import {graphql} from 'graphql'
import { FormitemcategoryMediumCardRelay } from './UserMediumCardRelay';
import { FormitemcategoryLargeCardLayout } from './FormitemcategoryLargeCardLayout';

export const FormitemcategoryLargeCardRelay = ({ formitemcategory, children}) => {
    return (
        <FormitemcategoryLargeCardLayout formitemcategory={ formitemcategory } grandchildren={children}>
            <FormitemcategoryMediumCardRelay formitemcategory={ formitemcategory } />
        </FormitemcategoryLargeCardLayout>
    )
}

