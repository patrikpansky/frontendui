// import {graphql} from 'graphql'
import { FormMediumCardRelay } from './UserMediumCardRelay';
import { FormLargeCardLayout } from './FormLargeCardLayout';

export const FormLargeCardRelay = ({ form, children}) => {
    return (
        <FormLargeCardLayout form={ form } grandchildren={children}>
            <FormMediumCardRelay form={ form } />
        </FormLargeCardLayout>
    )
}

