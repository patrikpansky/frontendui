// import {graphql} from 'graphql'
import { RbacobjectMediumCardRelay } from './UserMediumCardRelay';
import { RbacobjectLargeCardLayout } from './RbacobjectLargeCardLayout';

export const RbacobjectLargeCardRelay = ({ rbacobject, children}) => {
    return (
        <RbacobjectLargeCardLayout rbacobject={ rbacobject } grandchildren={children}>
            <RbacobjectMediumCardRelay rbacobject={ rbacobject } />
        </RbacobjectLargeCardLayout>
    )
}

