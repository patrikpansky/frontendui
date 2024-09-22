// import {graphql} from 'graphql'
import { {{Name name}}MediumCardRelay } from './UserMediumCardRelay';
import { {{Name name}}LargeCardLayout } from './{{Name name}}LargeCardLayout';

export const {{Name name}}LargeCardRelay = ({ {{name name}}, children}) => {
    return (
        <{{Name name}}LargeCardLayout {{name name}}={ {{name name}} } grandchildren={children}>
            <{{Name name}}MediumCardRelay {{name name}}={ {{name name}} } />
        </{{Name name}}LargeCardLayout>
    )
}

