// import {graphql} from 'graphql'
import { RoletypelistMediumCardRelay } from './UserMediumCardRelay';
import { RoletypelistLargeCardLayout } from './RoletypelistLargeCardLayout';

export const RoletypelistLargeCardRelay = ({ roletypelist, children}) => {
    return (
        <RoletypelistLargeCardLayout roletypelist={ roletypelist } grandchildren={children}>
            <RoletypelistMediumCardRelay roletypelist={ roletypelist } />
        </RoletypelistLargeCardLayout>
    )
}

