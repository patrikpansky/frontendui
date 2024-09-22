// import {graphql} from 'graphql'
import { FormitemtypeMediumCardRelay } from './UserMediumCardRelay';
import { FormitemtypeLargeCardLayout } from './FormitemtypeLargeCardLayout';

export const FormitemtypeLargeCardRelay = ({ formitemtype, children}) => {
    return (
        <FormitemtypeLargeCardLayout formitemtype={ formitemtype } grandchildren={children}>
            <FormitemtypeMediumCardRelay formitemtype={ formitemtype } />
        </FormitemtypeLargeCardLayout>
    )
}

