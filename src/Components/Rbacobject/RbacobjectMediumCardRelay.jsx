// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RbacobjectMediumCard } from './RbacobjectMediumCard';

const RbacobjectMediumCardRelayFragment = graphql`fragment RbacobjectMediumCardRelayFragment on RbacobjectGQLModel {
    id
}`

export const RbacobjectMediumCardRelay = ({ rbacobject, children }) => {
    const rbacobject_ = useFragment(RbacobjectMediumCardRelayFragment, rbacobject);
    return (
        <RbacobjectMediumCard rbacobject = { rbacobject_ }>
            {children}
        </RbacobjectMediumCard>
    )
}

