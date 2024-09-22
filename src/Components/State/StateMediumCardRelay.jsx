// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { StateMediumCard } from './StateMediumCard';

const StateMediumCardRelayFragment = graphql`fragment StateMediumCardRelayFragment on StateGQLModel {
    id
    created
    lastchange
    name
    nameen
    order
}`

export const StateMediumCardRelay = ({ state, children }) => {
    const state_ = useFragment(StateMediumCardRelayFragment, state);
    return (
        <StateMediumCard state = { state_ }>
            {children}
        </StateMediumCard>
    )
}

