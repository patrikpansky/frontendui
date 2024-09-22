// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { UserconnectionedgeMediumCard } from './UserconnectionedgeMediumCard';

const UserconnectionedgeMediumCardRelayFragment = graphql`fragment UserconnectionedgeMediumCardRelayFragment on UserconnectionedgeGQLModel {
    cursor
}`

export const UserconnectionedgeMediumCardRelay = ({ userconnectionedge, children }) => {
    const userconnectionedge_ = useFragment(UserconnectionedgeMediumCardRelayFragment, userconnectionedge);
    return (
        <UserconnectionedgeMediumCard userconnectionedge = { userconnectionedge_ }>
            {children}
        </UserconnectionedgeMediumCard>
    )
}

