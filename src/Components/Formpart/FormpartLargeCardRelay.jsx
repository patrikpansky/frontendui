// import {graphql} from 'graphql'
import { FormpartMediumCardRelay } from './UserMediumCardRelay';
import { FormpartLargeCardLayout } from './FormpartLargeCardLayout';

export const FormpartLargeCardRelay = ({ formpart, children}) => {
    return (
        <FormpartLargeCardLayout formpart={ formpart } grandchildren={children}>
            <FormpartMediumCardRelay formpart={ formpart } />
        </FormpartLargeCardLayout>
    )
}

