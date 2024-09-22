// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { UserconnectionMediumCard } from './UserconnectionMediumCard';

const UserconnectionMediumCardRelayFragment = graphql`fragment UserconnectionMediumCardRelayFragment on UserconnectionGQLModel {
}`

export const UserconnectionMediumCardRelay = ({ userconnection, children }) => {
    const userconnection_ = useFragment(UserconnectionMediumCardRelayFragment, userconnection);
    return (
        <UserconnectionMediumCard userconnection = { userconnection_ }>
            {children}
        </UserconnectionMediumCard>
    )
}

