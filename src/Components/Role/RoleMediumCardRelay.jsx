// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RoleMediumCard } from './RoleMediumCard';

const RoleMediumCardRelayFragment = graphql`fragment RoleMediumCardRelayFragment on RoleGQLModel {
    id
    created
    lastchange
    valid
    startdate
    enddate
}`

export const RoleMediumCardRelay = ({ role, children }) => {
    const role_ = useFragment(RoleMediumCardRelayFragment, role);
    return (
        <RoleMediumCard role = { role_ }>
            {children}
        </RoleMediumCard>
    )
}

