// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { GroupconnectionMediumCard } from './GroupconnectionMediumCard';

const GroupconnectionMediumCardRelayFragment = graphql`fragment GroupconnectionMediumCardRelayFragment on GroupconnectionGQLModel {
}`

export const GroupconnectionMediumCardRelay = ({ groupconnection, children }) => {
    const groupconnection_ = useFragment(GroupconnectionMediumCardRelayFragment, groupconnection);
    return (
        <GroupconnectionMediumCard groupconnection = { groupconnection_ }>
            {children}
        </GroupconnectionMediumCard>
    )
}

