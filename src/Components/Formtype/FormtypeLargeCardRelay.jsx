// import {graphql} from 'graphql'
import { FormtypeMediumCardRelay } from './UserMediumCardRelay';
import { FormtypeLargeCardLayout } from './FormtypeLargeCardLayout';

export const FormtypeLargeCardRelay = ({ formtype, children}) => {
    return (
        <FormtypeLargeCardLayout formtype={ formtype } grandchildren={children}>
            <FormtypeMediumCardRelay formtype={ formtype } />
        </FormtypeLargeCardLayout>
    )
}

