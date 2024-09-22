// import {graphql} from 'graphql'
import { FormitemMediumCardRelay } from './UserMediumCardRelay';
import { FormitemLargeCardLayout } from './FormitemLargeCardLayout';

export const FormitemLargeCardRelay = ({ formitem, children}) => {
    return (
        <FormitemLargeCardLayout formitem={ formitem } grandchildren={children}>
            <FormitemMediumCardRelay formitem={ formitem } />
        </FormitemLargeCardLayout>
    )
}

