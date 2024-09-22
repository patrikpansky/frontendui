// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { GroupconnectionedgeMediumCard } from './GroupconnectionedgeMediumCard';

const GroupconnectionedgeMediumCardRelayFragment = graphql`fragment GroupconnectionedgeMediumCardRelayFragment on GroupconnectionedgeGQLModel {
    cursor
}`

export const GroupconnectionedgeMediumCardRelay = ({ groupconnectionedge, children }) => {
    const groupconnectionedge_ = useFragment(GroupconnectionedgeMediumCardRelayFragment, groupconnectionedge);
    return (
        <GroupconnectionedgeMediumCard groupconnectionedge = { groupconnectionedge_ }>
            {children}
        </GroupconnectionedgeMediumCard>
    )
}

